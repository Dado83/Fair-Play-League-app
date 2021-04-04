import React, { useState, useEffect } from 'react'
import './style.css'

export default function Table(props) {

  const [table, setTable] = useState([])
  useEffect(() => {
    console.log('inside table useeffect')
    let url = fetch('http://localhost/rest/getTable/table11')

    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, [])

  const [name, setName] = useState('')
  useEffect(() => {
    console.log('inside name useeffect')
    setName('name in useeffect')
  }, [])

  let x = <h1>proba varijable u komponenti</h1>
  return (
    <>
      {table.map(t => (
        <p className='app' key={t.team}>{t.team} {t.points}</p>
      ))}
      <p> {props.name}</p>
      {x}
      {name}
    </>
  );
}
