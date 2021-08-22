import React, { useState, useEffect } from 'react';


export default function TableAlltime(props) {
  return (
    <table className='archive table ar-increase'>
      <tr>
        <td>#</td>
        <td>Tim</td>
        <td>OS</td>
        <td>B</td>
      </tr>
      {props.table.map((tab, index) => (
        <tr key={tab.id}>
          <td>{++index}.</td>
          <td>{tab.team}</td>
          <td>{tab.games}</td>
          <td>{tab.points}</td>
        </tr>
      ))}
    </table>
  );
}
