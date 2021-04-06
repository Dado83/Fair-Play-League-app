import React, { useState, useEffect } from 'react'
import './style.css'


export default function Table(props) {

  const [table, setTable] = useState([])
  //const [year, setYear] = useState('table7')
  let year = props.year
  useEffect(() => {
    console.log('inside table useeffect')
    let url = fetch(`http://localhost/rest/getTable/${year}`)

    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, [year])



  return (
    <>
      {/* <button onClick={() => setYear('table8')}>2008</button> */}
      {table.map(t => (
        <p className='app' key={t.team}>{t.team} {t.points}</p>
      ))}
    </>
  );
}
