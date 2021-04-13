import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default function Results(props) {
  const [results, setResults] = useState();

  useEffect(() => {
    fetch('http://localhost/rest/getresults')
      .then(r => r.json())
      .then(d => setResults(d))
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <h1>results</h1>
      {results ?
        <table>
          <tbody>
            <th>kolo</th>
            <th>domacin</th>
            <th>gost</th>
            <th colSpan='2'>2007</th>
            <th colSpan='2'>2008</th>
            <th colSpan='2'>2009</th>
            <th colSpan='2'>2010</th>
            <th colSpan='2'>2011</th>
            {results.map(r => (
              <tr>
                <td>{r.m_day}</td>
                <td>{r.home_name}</td>
                <td>{r.away_name}</td>
                <td>{r.goals_home7}</td>
                <td>{r.goals_away7}</td>
                <td>{r.goals_home8}</td>
                <td>{r.goals_away8}</td>
                <td>{r.goals_home9}</td>
                <td>{r.goals_away9}</td>
                <td>{r.goals_home10}</td>
                <td>{r.goals_away10}</td>
                <td>{r.goals_home11}</td>
                <td>{r.goals_away11}</td>
              </tr>
            ))}
          </tbody>
        </table> : <p>...ucitavam...</p>
      }
    </>
  )
}
