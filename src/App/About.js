import React, { useEffect } from 'react';
import FPAbout from '../components/FPabout';


export default function About() {
  const url = window.location.href;
  useEffect(() => {
    fetch(`http://localhost/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <FPAbout />
    </div>
  );
}
