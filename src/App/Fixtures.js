import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default function Fixtures(props) {

  return (
    <>
      <h1>fixtures</h1>
      <Link to='/rezultati' > Rezultati</Link>
    </>
  )
}
