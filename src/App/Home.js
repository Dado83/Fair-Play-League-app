import React, { useState, useEffect } from 'react'
import './App.css'
import Table from '../components/Table/Table'

export default function Home(props) {

  const [year, setYear] = useState('table7')


  return (
    <>
      <button onClick={() => setYear('table7')}>2007</button>
      <button onClick={() => setYear('table8')}>2008</button>
      <button onClick={() => setYear('table9')}>2009</button>
      <button onClick={() => setYear('table10')}>2010</button>
      <button onClick={() => setYear('table11')}>2011</button>
      <Table year={year} />
    </>
  )
}
