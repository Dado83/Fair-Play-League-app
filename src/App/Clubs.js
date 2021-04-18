import React, { useState, useEffect } from 'react';
import Club from '../components/Club/Club';

export default function Clubs(props) {
  /* const [clubs, setClubs] = useState([]); 
  useEffect(() => {
    fetch('http://localhost/rest/getTeams')
      .then(r => r.json())
      .then(d => setClubs(d))
      .catch(e => console.log(e))
  }, [])*/

  let clubs = [];
  for (let i = 1; i <= 11; i++) {
    clubs[i] = <Club key={i} id={i} />;
  }

  return (
    clubs.map(e =>
      e)
  )
}
