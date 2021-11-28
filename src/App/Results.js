import ResultPage from '../components/ResultPage';
import React, { useEffect } from 'react';
import { protocol } from '../utility/utility';

export default function Results() {
  const site = document.location.hostname;
  const url = window.location.href;

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);
  let results = [];
  for (let i = 1; i <= 7; i++) {
    results[i] = <ResultPage key={i} mDay={i} site={site} />;
  }

  return <div className='content'>{results.map((res) => res)}</div>;
}
