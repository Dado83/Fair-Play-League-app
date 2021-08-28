import Club from '../components/Club';
import React, { useEffect } from 'react';


export default function Clubs() {
  const site = document.location.hostname;

  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  let clubs = [];
  for (let i = 1; i <= 11; i++) {
    clubs[i] = <Club key={i} id={i} site={site} />;
  }

  return (
    <div className='content'>
      {clubs.map(club => club)}
    </div>
  );
}
