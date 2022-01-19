import ResultPage from '../components/ResultPage';
import React, { useEffect, useState } from 'react';
import { protocol } from '../utility/utility';

export default function Results() {
  const site = document.location.hostname;
  const url = window.location.href;
  const [results, setResults] = useState([]);
  //const [mDayNum, setMDN] = useState('');

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  useEffect(() => {
    let md;
    const getMday = async () => {
      const mdayReq = await fetch(`${protocol}://${site}/api/results.php?nextfix=nextfix`);
      console.log('fetch ', mdayReq);
      const mday = await mdayReq.json();
      console.log('json ', mday);
      md = mday - 1;

      let res = [];
      for (let i = 1; i <= md; i++) {
        res[i] = <ResultPage key={i} mDay={i} site={site} />;
      }
      setResults(res);
    };
    getMday();
  }, []);

  return <div className='content'>{results.map((res) => res)}</div>;
}
