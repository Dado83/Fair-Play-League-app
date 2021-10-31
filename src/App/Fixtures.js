import Fixture from '../components/Fixture';
import React, { useEffect } from 'react';


export default function Fixtures() {
  const site = document.location.hostname;

  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  let fixtures = [];
  for (let i = 1; i <= 7; i++) {
    fixtures[i] = <Fixture key={i} mDay={i} site={site} />;
  }

  return (
    <>
      <h1>Raspored:</h1>
      <div className='content'>
        {fixtures.map(fix =>
          fix)}
      </div>
    </>
  );
}
