import React, { useState, useEffect } from 'react'
import Result from '../components/Result/Result';

export default function Results(props) {
  const [results, setResults] = useState();

  useEffect(() => {
    fetch('http://localhost/rest/getresults')
      .then(r => r.json())
      .then(d => setResults(d))
      .catch(e => console.log(e))
  }, [])

  let res = [];
  for (let i = 1; i <= 11; i++) {
    res[i] = <Result key={i} mDay={i} />;
  }

  return (
    res.map(e =>
      e)
  )
}
