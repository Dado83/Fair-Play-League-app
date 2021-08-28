import ResultPage from '../components/ResultPage';
import React, { useEffect } from 'react';


export default function Results() {
  const site = document.location.hostname;
  const url = window.location.href;

  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);
  let results = [];
  for (let i = 1; i <= 11; i++) {
    results[i] = <ResultPage key={i} mDay={i} site={site} />;
  }

  return (
    <div className='content'>
      {results.map(res =>
        res)}
    </div>
  );
}
