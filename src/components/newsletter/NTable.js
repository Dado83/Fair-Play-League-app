import React, { useState, useEffect } from 'react';
import { protocol } from '../../utility/utility';
import logo1 from '../../assets/club-small/1.png';
import logo2 from '../../assets/club-small/2.png';
import logo3 from '../../assets/club-small/3.png';
import logo4 from '../../assets/club-small/4.png';
import logo5 from '../../assets/club-small/5.png';
import logo6 from '../../assets/club-small/6.png';
import logo7 from '../../assets/club-small/7.png';
import logo8 from '../../assets/club-small/8.png';

export default function NTable(props) {
  const logos = new Map();
  logos.set('1', logo1);
  logos.set('2', logo2);
  logos.set('3', logo3);
  logos.set('4', logo4);
  logos.set('5', logo5);
  logos.set('6', logo6);
  logos.set('7', logo7);
  logos.set('8', logo8);

  return (
    <table className='table ar-increase newsletterT'>
      <tr>
        <td>#</td>
        <td>{props.selection}. godište</td>
        <td>OS</td>
        <td>P</td>
        <td>N</td>
        <td>I</td>
        <td>G</td>
        <td>B</td>
      </tr>
      {props.table.map((tab, index) => (
        <tr key={tab.id}>
          <td>{++index}.</td>
          <td>
            <img src={logos.get(tab.id)} />
            {tab.team}
          </td>
          <td>{tab.games_played}</td>
          <td>{tab.games_won}</td>
          <td>{tab.games_drew}</td>
          <td>{tab.games_lost}</td>
          <td>
            {tab.goals_scored}:{tab.goals_conceded}
          </td>
          <td>{tab.points}</td>
        </tr>
      ))}
    </table>
  );
}
