import React, { useState, useEffect } from 'react';
import { protocol } from '../../utility/utility';

export default function NTable(props) {
  return (
    <table className='table ar-increase  newsletterT'>
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
            <img src={`${protocol}://${props.site}/api/logos/${tab.id}.png`} />
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
