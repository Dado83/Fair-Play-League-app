import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


export default function Err404() {
  const site = document.location.hostname;
  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <h1>Nema stranice...</h1>
      <Link to='/'>aj nazad kuci</Link>
    </div>
  );
}
