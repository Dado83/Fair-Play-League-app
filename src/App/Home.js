import React, { useState, useEffect } from 'react';
import Fixture from '../components/Fixture';
import Table from '../components/Table';
import Result from '../components/Result';
import Loader from '../components/Loader';
import { protocol } from '../utility/utility';

export default function Home() {
  const site = document.location.hostname;
  console.log(site);
  const [leagueOver, setLeagueOver] = useState(false); /* set to true if setNextMday returns non-existant mday */
  const [nextMday, setNextMday] = useState('');
  const [prevRes, setprevRes] = useState('');
  const [table8, setTable8] = useState([]);
  const [table9, setTable9] = useState([]);
  const [table10, setTable10] = useState([]);
  const [table11, setTable11] = useState([]);
  const [table12, setTable12] = useState([]);
  const [table, setTable] = useState([]);
  const [selection, setSelection] = useState('');
  const youthInit = {
    gen8: 'result-hidden',
    gen9: 'result-hidden',
    gen10: 'result-hidden',
    gen11: 'result-hidden',
    gen12: 'result-hidden',
  };
  const [youth, setYouth] = useState({ ...youthInit });
  const url = window.location.href;

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  useEffect(() => {
    setYouth({ ...youthInit, gen8: 'result-shown' });
  }, []);

  useEffect(() => {
    let url = new Map();
    url.set(8, fetch(`${protocol}://${site}/api/table.php?table=table8`));
    url.set(9, fetch(`${protocol}://${site}/api/table.php?table=table9&id1=1`));
    url.set(10, fetch(`${protocol}://${site}/api/table.php?table=table10`));
    url.set(11, fetch(`${protocol}://${site}/api/table.php?table=table11`));
    url.set(12, fetch(`${protocol}://${site}/api/table.php?table=table12&id1=2&id2=5&id3=6`));

    const prevRes = fetch(`${protocol}://${site}/api/results.php?prevres=prevres`);
    const nextFix = fetch(`${protocol}://${site}/api/results.php?nextfix=nextfix`);

    const getData = async () => {
      try {
        const [s8, s9, s10, s11, s12, res, fix] = await Promise.all([
          url.get(8),
          url.get(9),
          url.get(10),
          url.get(11),
          url.get(12),
          prevRes,
          nextFix,
        ]);

        if (!s8.ok) {
          throw Error('response not ok');
        }

        const sel8 = await s8.json();
        const sel9 = await s9.json();
        const sel10 = await s10.json();
        const sel11 = await s11.json();
        const sel12 = await s12.json();

        const dataRes = await res.json();
        const dataFix = await fix.json();

        setprevRes((prevState) => dataRes);
        setNextMday((prevState) => dataFix);

        setSelection('2008');
        setTable((prevState) => sel8);
        setTable8((prevState) => sel8);
        setTable9((prevState) => sel9);
        setTable10((prevState) => sel10);
        setTable11((prevState) => sel11);
        setTable12((prevState) => sel12);

        if (dataFix > 11) {
          setLeagueOver(true);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const buttonSelection = (param) => {
    const siblings = param.target.parentNode.children;
    for (let s of siblings) {
      s.className = 'button-default';
    }
    param.target.className = 'button-selected';
  };

  return (
    <>
      <div className='home-button'>
        <button
          className='button-selected'
          onClick={(e) => {
            setSelection('2008');
            setTable((prevState) => table8);
            setYouth((prevState) => ({ ...youthInit, gen8: 'result-shown' }));
            buttonSelection(e);
          }}>
          2008
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setSelection('2009');
            setTable((prevState) => table9);
            setYouth((prevState) => ({ ...youthInit, gen9: 'result-shown' }));
            buttonSelection(e);
          }}>
          2009
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setSelection('2010');
            setTable((prevState) => table10);
            setYouth((prevState) => ({ ...youthInit, gen10: 'result-shown' }));
            buttonSelection(e);
          }}>
          2010
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setSelection('2011');
            setTable((prevState) => table11);
            setYouth((prevState) => ({ ...youthInit, gen11: 'result-shown' }));
            buttonSelection(e);
          }}>
          2011
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setSelection('2012');
            setTable((prevState) => table12);
            setYouth((prevState) => ({ ...youthInit, gen12: 'result-shown' }));
            buttonSelection(e);
          }}>
          2012
        </button>
      </div>
      <div className='content'>
        {table.length != 0 ? <Table site={site} table={table} selection={selection} /> : <Loader />}
        {prevRes ? <Result mDay={prevRes} {...youth} site={site} /> : ''}
        {nextMday && !leagueOver ? <Fixture site={site} mDay={nextMday} /> : ''}
      </div>
    </>
  );
}
