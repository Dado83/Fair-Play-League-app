import React, { useEffect } from 'react';
import FPAbout from '../components/FPabout';
import { protocol } from '../utility/utility';

export default function About() {
  const site = document.location.hostname;
  const url = window.location.href;

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <FPAbout />
    </div>
  );
}
