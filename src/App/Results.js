import ResultPage from '../components/ResultPage';
import React, { useEffect, useState } from 'react';
import { protocol } from '../utility/utility';

export default function Results() {
  const site = document.location.hostname;
  const url = window.location.href;
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  useEffect(() => {
    let res = [];
    for (let i = 1; i <= 7; i++) {
      res[i] = <ResultPage key={i} mDay={i} site={site} />;
    }
    setResults(res);
  }, []);

  return <div className='content'>{results.map((res) => res)}</div>;
}
