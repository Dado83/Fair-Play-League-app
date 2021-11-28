import React, { useState, useEffect } from 'react';
import NRPage from './NRPage';
import NFix from './NFix';
import NTable from './NTable';
import { protocol } from '../../utility/utility';

export default function NewsLetter(props) {
  const site = document.location.hostname;
  const [leagueOver, setLeagueOver] = useState(false);
  const [nextMday, setNextMday] = useState('');
  const [table8, setTable8] = useState([]);
  const [table9, setTable9] = useState([]);
  const [table10, setTable10] = useState([]);
  const [table11, setTable11] = useState([]);
  const [table12, setTable12] = useState([]);
  const [selection, setSelection] = useState('');

  useEffect(() => {
    let url = new Map();
    url.set(12, `${protocol}://${site}/api/table.php?table=table12&id1=2&id2=5&id3=6`);
    url.set(8, `${protocol}://${site}/api/table.php?table=table8`);
    url.set(9, `${protocol}://${site}/api/table.php?table=table9&id1=1`);
    url.set(10, `${protocol}://${site}/api/table.php?table=table10`);
    url.set(11, `${protocol}://${site}/api/table.php?table=table11`);

    fetch(url.get(12))
      .then((response) => response.json())
      .then((data) => setTable12((prevState) => data))
      .catch((err) => console.log(err));

    fetch(url.get(8))
      .then((response) => response.json())
      .then((data) => setTable8((prevState) => data))
      .catch((err) => console.log(err));

    fetch(url.get(9))
      .then((response) => response.json())
      .then((data) => setTable9((prevState) => data))
      .catch((err) => console.log(err));

    fetch(url.get(10))
      .then((response) => response.json())
      .then((data) => setTable10((prevState) => data))
      .catch((err) => console.log(err));

    fetch(url.get(11))
      .then((response) => response.json())
      .then((data) => setTable11((prevState) => data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${protocol}://${site}/api/results.php?nextfix=nextfix`)
      .then((response) => response.json())
      .then((data) => {
        if (data > 11) {
          setLeagueOver(true);
        }
        setNextMday((prevState) => data);
      })
      .catch((err) => console.log(err));
  }, []);

  //ispraviti Fixture kad podesim css
  return (
    <>
      <div className='newsletter'>
        <h1>FAIR PLAY Liga Budućih Šampiona</h1>
        <h2>takmičarska sezona 2020/21</h2>
        <h3>Bilten br. {nextMday - 1}</h3>
        <p>1. Registracija utakmica {nextMday - 1}. kola</p>
        <p>2. Raspored utakmica {nextMday}. kola</p>
      </div>
      <p className='ad'>ad 1)</p>
      <NRPage mDay={nextMday - 1} site={site} />
      <NTable site={site} table={table8} selection={2008} />
      <NTable site={site} table={table9} selection={2009} />
      <NTable site={site} table={table10} selection={2010} />
      <NTable site={site} table={table11} selection={2011} />
      <NTable site={site} table={table12} selection={2012} />
      <p className='ad'>ad 2)</p>
      <NFix site={site} mDay={nextMday} />
    </>
  );
}
