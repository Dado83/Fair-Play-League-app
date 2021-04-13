import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Fixtures(props) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/rest/getAllMatchPairs`)
      .then(r => r.json())
      .then(d => setFixtures(d))
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <h1>fixtures</h1>
      <table>
        <tbody>
          {fixtures.map(f => (
            <tr>
              <td>{f.m_day}</td>
              <td>{f.home_club}</td>
              <td>{f.away_club}</td>
              <td>{f.game_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
