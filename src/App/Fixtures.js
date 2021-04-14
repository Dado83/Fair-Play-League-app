import React, { useState, useEffect } from 'react'
import Fixture from '../components/Fixture/Fixture'

export default function Fixtures(props) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/rest/getAllMatchPairs`)
      .then(r => r.json())
      .then(d => setFixtures(d))
      .catch(e => console.log(e))
  }, [])

  let fix = [];
  for (let i = 1; i <= 11; i++) {
    fix[i] = <Fixture key={i} mDay={i} />;
  }


  return (
    <>
      <h1>fixtures</h1>
      {/* <table>
        <tbody>
          <th>kolo</th>
          <th></th>
          <th></th>
          <th>datum</th>
          {fixtures.map(f => (
            <tr>
              <td>{f.m_day}</td>
              <td>{f.home_club}</td>
              <td>{f.away_club}</td>
              <td>{f.game_date}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <hr />
      {fix.map(e =>
        e)}
    </>
  )
}
