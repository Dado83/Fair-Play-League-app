import React, { useState, useEffect } from 'react';
import './style.css';


export default function Table(props) {

  const [table, setTable] = useState([]);
  //const [year, setYear] = useState('table7')
  let year = props.year;
  useEffect(() => {
    console.log('inside table useeffect')
    let url = fetch(`http://localhost/rest/getTable/${year}`)

    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, [year]);



  return (
    <table className='table'>
      <tbody>
        {table.map((t, index) => (
          <tr key={t.id}>
            <td>{++index}</td>
            <td>{t.team}</td>
            <td>{t.games_played}</td>
            <td>{t.games_won}</td>
            <td>{t.games_drew}</td>
            <td>{t.games_lost}</td>
            <td>{t.goals_scored}</td>
            <td>:</td>
            <td>{t.goals_conceded}</td>
            <td>{t.g_diff}</td>
            <td>{t.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
