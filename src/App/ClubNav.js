import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Clubs() {
  const site = document.location.hostname;
  const clubs = new Map();
  clubs.set(1, 'ŠS Internacional');
  clubs.set(2, 'ŠF Lavovi');
  clubs.set(3, 'NK Don Bosco');
  clubs.set(4, 'Euro Football');
  clubs.set(5, 'ŠN Novi Šeher');
  clubs.set(6, 'ŠN Perfect');
  clubs.set(7, 'NK Zvijezda');
  clubs.set(8, 'FK Proleter');
  let navEl;

  const select = (e) => {
    navEl.childNodes.forEach((e) => {
      e.className = 'club-navlink';
    });
    e.target.className = 'club-navlink club-navlink--isselected';
  };

  useEffect(() => {
    navEl = document.querySelector('.club-nav');
    navEl.childNodes.forEach((e) => {
      e.addEventListener('mouseup', select);
    });
  });

  return (
    <nav className='club-nav'>
      <Link
        to={{ pathname: '/klub', state: { id: 1 } }}
        className='club-navlink club-navlink--isselected'>
        {clubs.get(1)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 2 } }} className='club-navlink'>
        {clubs.get(2)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 3 } }} className='club-navlink'>
        {clubs.get(3)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 4 } }} className='club-navlink'>
        {clubs.get(4)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 5 } }} className='club-navlink'>
        {clubs.get(5)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 6 } }} className='club-navlink'>
        {clubs.get(6)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 7 } }} className='club-navlink'>
        {clubs.get(7)}
      </Link>
      <Link to={{ pathname: '/klub', state: { id: 8 } }} className='club-navlink'>
        {clubs.get(8)}
      </Link>
    </nav>
  );
}
