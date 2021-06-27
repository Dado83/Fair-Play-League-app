import React, { useState, useEffect } from 'react';

export default function TableAlltime(props) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    let url = fetch(`http://localhost/api/archive.php?year=alltime`);
    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <table className='archive table'>
      <tr>
        <td>#</td>
        <td>Tim</td>
        <td>OS</td>
        <td>B</td>
      </tr>
      {table.map((tab, index) => (
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
