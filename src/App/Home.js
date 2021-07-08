import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Result from '../components/Result';
import Loader from '../components/Loader';


export default function Home() {
  const site = document.location.hostname; console.log(site);
  const [year, setYear] = useState('table7&id1=5&id2=8&id3=9&id4=10');
  const [mDay, setMday] = useState('');
  const [isLoaded, setLoaded] = useState(false);
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
          setYear('table7&id1=5&id2=8&id3=9&id4=10');
          setYouth({ ...youthInit, gen7: 'result-shown' });
          buttonSelection(e);
        }}>2007</button>
        <button className='button-default' onClick={(e) => {
          setYear('table8');
          setYouth({ ...youthInit, gen8: 'result-shown' });
          buttonSelection(e);
        }}>2008</button>
        <button className='button-default' onClick={(e) => {
          setYear('table9');
          setYouth({ ...youthInit, gen9: 'result-shown' });
          buttonSelection(e);
        }}>2009</button>
        <button className='button-default' onClick={(e) => {
          setYear('table10&id1=11');
          setYouth({ ...youthInit, gen10: 'result-shown' });
          buttonSelection(e);
        }}>2010</button>
        <button className='button-default' onClick={(e) => {
          setYear('table11&id1=4');
          setYouth({ ...youthInit, gen11: 'result-shown' });
          buttonSelection(e);
        }}>2011</button>
      </div>
      <div className='content'>
        <Table year={year} site={site} />
        {mDay ? <Result mDay={mDay} {...youth} site={site} /> : <Loader />}
      </div>
    </>
  );
}
