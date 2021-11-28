import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { protocol } from '../utility/utility';

export default function Err404() {
  const site = document.location.hostname;
  const url = window.location.href;

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <h1>Nema stranice...</h1>
      <Link to='/'>aj nazad kuci</Link>
    </div>
  );
}
