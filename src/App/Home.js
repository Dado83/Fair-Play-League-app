import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Result from '../components/Result';


export default function Home() {
  const [year, setYear] = useState('table7&id1=5&id2=8&id3=9&id4=10');
  const [mDay, setMday] = useState('');

  useEffect(() => {
    fetch('http://localhost/api/results.php?maxmday=true')
      .then(response => response.json())
      .then(data => setMday(data))
      .catch(err => console.log(err));
  }, []);

  console.log(mDay)

  let genProps = {
    gen7: 'result-hidden',
    gen9: 'result-hidden'
  }

  return (
    <>
      <div>
        <button onClick={() => setYear('table7&id1=5&id2=8&id3=9&id4=10')}>2007</button>
        <button onClick={() => setYear('table8')}>2008</button>
        <button onClick={() => setYear('table9')}>2009</button>
        <button onClick={() => setYear('table10&id1=11')}>2010</button>
        <button onClick={() => setYear('table11&id1=4')}>2011</button>
      </div>
      <div className='content'>
        <Table year={year} />
        {mDay ? <Result mDay={mDay} {...genProps} /> : <p>asdasd</p>}
      </div>
    </>
  );
}
