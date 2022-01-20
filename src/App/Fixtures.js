import Fixture from '../components/Fixture';
import React, { useEffect, useState } from 'react';
import { protocol } from '../utility/utility';
import useVisitorCount from '../utility/useVisitorCount';

export default function Fixtures() {
  const site = document.location.hostname;
  const url = window.location.href;
  const [fixtures, setFixtures] = useState([]);

  useVisitorCount(protocol, site, url);

  useEffect(() => {
    let fix = [];
    for (let i = 1; i <= 7; i++) {
      fix[i] = <Fixture key={i} mDay={i} site={site} />;
    }
    setFixtures(fix);
  }, []);

  return (
    <>
      <h1>Raspored:</h1>
      <div className='content'>{fixtures.map((fix) => fix)}</div>
    </>
  );
}
