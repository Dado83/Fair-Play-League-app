import React, { useState } from 'react';
import FPAbout from '../components/FPabout';
import Archive from '../components/Archive';


export default function About() {
  const [year, setYear] = useState('archive14_15');

  return (
    <div className='content'>
      <FPAbout />
      <div>
        <p></p>
        <button onClick={() => setYear('archive14_15')}>14/15</button>
        <button onClick={() => setYear('archive15_16')}>15/16</button>
        <button onClick={() => setYear('archive16_17')}>16/17</button>
        <button onClick={() => setYear('archive17_18')}>17/18</button>
        <button onClick={() => setYear('archive18_19')}>18/19</button>
        <button onClick={() => setYear('archive19_20')}>19/20</button>
        <button onClick={() => setYear('archive20_21')}>20/21</button>
        <Archive year={year} />
      </div>
    </div>
  );
}
