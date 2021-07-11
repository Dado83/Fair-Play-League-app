import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Result from '../components/Result';
import Loader from '../components/Loader';


export default function Home() {
  const site = document.location.hostname; console.log(site);
  const [mDay, setMday] = useState('');
  const [table7, setTable7] = useState([]);
  const [table8, setTable8] = useState([]);
  const [table9, setTable9] = useState([]);
  const [table10, setTable10] = useState([]);
  const [table11, setTable11] = useState([]);
  const [table, setTable] = useState([]);
  const youthInit = {
    gen7: 'result-hidden',
    gen8: 'result-hidden',
    gen9: 'result-hidden',
    gen10: 'result-hidden',
    gen11: 'result-hidden',
  };
  const [youth, setYouth] = useState({ ...youthInit });

  useEffect(() => {
    setYouth({ ...youthInit, gen7: 'result-shown' });
  }, []);

  useEffect(() => {
    let url = new Map();
    url.set(7, `http://${site}/api/table.php?table=table7&id1=5&id2=8&id3=9&id4=10`);
    url.set(8, `http://${site}/api/table.php?table=table8`);
    url.set(9, `http://${site}/api/table.php?table=table9`);
    url.set(10, `http://${site}/api/table.php?table=table10&id1=11`);
    url.set(11, `http://${site}/api/table.php?table=table11&id1=4`);

    fetch(url.get(7))
      .then(response => response.json())
      .then(data => {
        setTable(data);
        setTable7(data);
      })
      .catch(err => console.log(err));

    fetch(url.get(8))
      .then(response => response.json())
      .then(data => setTable8(data))
      .catch(err => console.log(err));

    fetch(url.get(9))
      .then(response => response.json())
      .then(data => setTable9(data))
      .catch(err => console.log(err));

    fetch(url.get(10))
      .then(response => response.json())
      .then(data => setTable10(data))
      .catch(err => console.log(err));

    fetch(url.get(11))
      .then(response => response.json())
      .then(data => setTable11(data))
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    fetch(`http://${site}/api/results.php?maxmday=true`)
      .then(response => response.json())
      .then(data => setMday(data))
      .catch(err => console.log(err));
  }, []);

  const buttonSelection = (param) => {
    const siblings = param.target.parentNode.children;
    for (let s of siblings) {
      s.className = 'button-default';
    }
    param.target.className = 'button-selected'
  }

  return (
    <>
      <div className='home-button'>
        <button className='button-selected' onClick={(e) => {
          setTable(table7);
          setYouth({ ...youthInit, gen7: 'result-shown' });
          buttonSelection(e);
        }}>2007</button>
        <button className='button-default' onClick={(e) => {
          setTable(table8);
          setYouth({ ...youthInit, gen8: 'result-shown' });
          buttonSelection(e);
        }}>2008</button>
        <button className='button-default' onClick={(e) => {
          setTable(table9);
          setYouth({ ...youthInit, gen9: 'result-shown' });
          buttonSelection(e);
        }}>2009</button>
        <button className='button-default' onClick={(e) => {
          setTable(table10);
          setYouth({ ...youthInit, gen10: 'result-shown' });
          buttonSelection(e);
        }}>2010</button>
        <button className='button-default' onClick={(e) => {
          setTable(table11);
          setYouth({ ...youthInit, gen11: 'result-shown' });
          buttonSelection(e);
        }}>2011</button>
      </div>
      <div className='content'>
        {table.length != 0 ? <Table site={site} table={table} /> : <Loader />}
        {mDay ? <Result mDay={mDay} {...youth} site={site} /> : <Loader />}
      </div>
    </>
  );
}
