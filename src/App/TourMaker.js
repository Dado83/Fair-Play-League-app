import React, { useEffect } from 'react';
import { protocol } from '../utility/utility';
import useVisitorCount from '../utility/useVisitorCount';

export default function TourMaker(props) {
  const site = document.location.hostname;
  const url = window.location.href;

  useVisitorCount(protocol, site, url);

  return (
    <div className='content'>
      <h1>tour mejk</h1>
    </div>
  );
}
