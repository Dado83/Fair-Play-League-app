import React from 'react';

export default function TableAlltime(props) {
  return (
    <table className='archive table ar-increase'>
      <thead>
        <tr>
          <td>#</td>
          <td>Tim</td>
          <td>OS</td>
          <td>B</td>
        </tr>
      </thead>
      <tbody>
        {props.table.map((tab, index) => (
          <tr key={index}>
            <td>{++index}.</td>
            <td>{tab.team}</td>
            <td>{tab.games}</td>
            <td>{tab.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
