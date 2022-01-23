import React from 'react';
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
    <div className='table ar-increase newsletterT'>
      <div className='newsletter-container newsletter-head'>
        <span>#</span>
        <span>{props.selection}. godište</span>
        <span>OS</span>
        <span>P</span>
        <span>N</span>
        <span>I</span>
        <span>G</span>
        <span>B</span>
      </div>
      {props.table.map((tab, index) => (
        <div className='newsletter-container' key={tab.id}>
          <span>{++index}.</span>
          <span>
            <img src={logos.get(tab.id)} alt='logo' />
            {tab.team}
          </span>
          <span>{tab.games_played}</span>
          <span>{tab.games_won}</span>
          <span>{tab.games_drew}</span>
          <span>{tab.games_lost}</span>
          <span>
            {tab.goals_scored}:{tab.goals_conceded}
          </span>
          <span>{tab.points}</span>
        </div>
      ))}
    </div>
  );
}
