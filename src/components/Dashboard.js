import React, { useState, useEffect } from 'react';
import PanelResult from './PanelResult';
import PanelFixture from './PanelFixture';
import { protocol } from '../utility/utility';

export default function Dashboard(props) {
  const site = document.location.hostname;
  const [mDay, setMday] = useState('');

  useEffect(() => {
    fetch(`${protocol}://${site}/api/results.php?maxmday=true`)
      .then((response) => response.json())
      .then((data) => setMday((prevState) => data))
      .catch((err) => console.log(err));
  }, []);

  let results = [];
  for (let i = 1; i <= mDay; i++) {
    results[i] = <PanelResult key={i} mDay={i} site={site} />;
  }

  return (
    <>
      <div className='content'>
        {results.map((res) => res)}
        <PanelFixture site={site} />
      </div>
    </>
  );
}
