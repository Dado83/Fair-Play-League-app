import React, { useEffect } from 'react';
import FPAbout from '../components/FPabout';
import { protocol } from '../utility/utility';
import useVisitorCount from '../utility/useVisitorCount';

export default function About() {
  const site = document.location.hostname;
  const url = window.location.href;

  useVisitorCount(protocol, site, url);

  return (
    <div className='content'>
      <FPAbout />
    </div>
  );
}
