import React from 'react';

export default function Archive(props) {
  return (
    <div>
      <table className='ar-increase table archive'>
        <thead>
          <tr>
            <td>#</td>
            <td></td>
            <td>🥇</td>
            <td>🥈</td>
            <td>🥉</td>
            <td>🏅</td>
            <td>bod</td>
          </tr>
        </thead>
        <tbody>
          {props.archive.map((arc, index) => (
            <tr key={index}>
              <td>{++index}.</td>
              <td>{arc.team}</td>
              <td>{arc.first}</td>
              <td>{arc.second}</td>
              <td>{arc.third}</td>
              <td>{arc.fourth}</td>
              <td>{arc.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='legend'>
        <p>🥇 1. mjesto</p>
        <p>🥈 2. mjesto</p>
        <p>🥉 3. mjesto</p>
        <p>🏅 4. mjesto</p>
      </div>
    </div>
  );
}
