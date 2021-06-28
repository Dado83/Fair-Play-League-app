import React, { useState } from 'react';
import FPAbout from '../components/FPabout';


export default function About() {
  const [year, setYear] = useState('archive14_15');

  return (
    <div className='content'>
      <FPAbout />
    </div>
  );
}
