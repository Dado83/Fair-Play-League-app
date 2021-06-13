import React, { useState, useEffect } from 'react';

export default function Table(props) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    console.log('inside table useeffect');
    let url = fetch(`http://localhost/api/table.php?table=${props.year}`);
    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, [props.year]);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>OS</th>
          <th>P</th>
          <th>N</th>
          <th>I</th>
          <th>G</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
        {table.map((tab, index) => (
          <tr key={tab.id}>
            <td>{++index}</td>
            <td>{tab.team}</td>
            <td>{tab.games_played}</td>
            <td>{tab.games_won}</td>
            <td>{tab.games_drew}</td>
            <td>{tab.games_lost}</td>
            <td>{tab.goals_scored}:{tab.goals_conceded}</td>
            <td>{tab.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
