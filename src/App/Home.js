import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import Result from '../components/Result/Result';

export default function Home() {
  const [year, setYear] = useState('table7/0/5/8/9/10');
  const [mDay, setMday] = useState('');

  useEffect(() => {
    fetch('http://localhost/rest/getMaxMday')
      .then(r => r.json())
      .then(d =>
        setMday(d.mDay))
      .catch(e => console.log(e));
  }, []);

  console.log(mDay)
  return (
    <>
      <button onClick={() => setYear('table7/0/5/8/9/10')}>2007</button>
      <button onClick={() => setYear('table8')}>2008</button>
      <button onClick={() => setYear('table9')}>2009</button>
      <button onClick={() => setYear('table10/0/11')}>2010</button>
      <button onClick={() => setYear('table11/0/4')}>2011</button>
      <Table year={year} />
      {mDay ? <Result mDay={mDay} /> : <p>asdasd</p>}
    </>
  );
}
