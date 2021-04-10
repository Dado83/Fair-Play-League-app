import React, { useState, useEffect } from 'react'
import './App.css'
import Table from '../components/Table/Table'

export default function Home(props) {

  const [year, setYear] = useState('table7/0/5/8/9/10')

  const d = () => {
    alert('dadadasd')
  }
  const ff = false;

  return (
    <>
      <button onClick={() => setYear('table7/0/5/8/9/10')}>2007</button>
      <button onClick={() => setYear('table8')}>2008</button>
      <button onClick={() => setYear('table9')}>2009</button>
      <button onClick={() => setYear('table10/0/11')}>2010</button>
      <button onClick={() => setYear('table11/0/4')}>2011</button>
      <Table year={year} />
    </>
  )
}
