import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Table from '../Table/Table'
import Navbar from '../Navbar/Navbar'
import Home from './App'

export default function App(props) {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/table' component={Table}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
