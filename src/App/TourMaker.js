import React, { useEffect } from 'react';
import { protocol } from '../utility/utility';

export default function TourMaker(props) {
  const site = document.location.hostname;
  const url = window.location.href;

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <h1>tour mejk</h1>
    </div>
  );
}
