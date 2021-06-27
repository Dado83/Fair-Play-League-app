import React, { useState } from 'react';
import Archive from '../components/Archive';
import TableAlltime from '../components/TableAlltime';


export default function Archives() {
  const [year, setYear] = useState('archive14_15');

  const buttonSelection = (param) => {
    const siblings = param.target.parentNode.children;
    for (let s of siblings) {
      s.className = 'button-default';
    }
    param.target.className = 'button-selected'
  }

  return (

    <>
      <div className='home-button'>
        <button className='button-selected' onClick={(e) => {
          setYear('archive14_15');
          buttonSelection(e);
        }}>14/15</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive15_16');
          buttonSelection(e);
        }}>15/16</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive16_17');
          buttonSelection(e);
        }}>16/17</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive17_18');
          buttonSelection(e);
        }}>17/18</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive18_19');
          buttonSelection(e);
        }}>18/19</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive19_20');
          buttonSelection(e);
        }}>19/20</button>
        <button className='button-default' onClick={(e) => {
          setYear('archive20_21');
          buttonSelection(e);
        }}>20/21</button>
      </div>
      <div className='content'>
        <Archive year={year} />
        <TableAlltime />
      </div>
    </>
  );
}
