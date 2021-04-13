import React, { useState, useEffect } from 'react';

export default function Clubs(props) {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch('http://localhost/rest/getTeams')
      .then(r => r.json())
      .then(d => setClubs(d))
      .catch(e => console.log(e))
  }, [])

  return (
    <table>
      <tbody>
        {clubs.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.team_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
