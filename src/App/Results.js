import React, { useState, useEffect } from 'react'
import Result from '../components/Result/Result';

export default function Results(props) {
  let results = [];
  for (let i = 1; i <= 11; i++) {
    results[i] = <Result key={i} mDay={i} />;
  }

  return (
    results.map(e =>
      e)
  )
}
