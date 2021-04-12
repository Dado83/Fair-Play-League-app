import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import Navbar from '../components/Navbar/Navbar';
import Home from './Home';
import Fixtures from './Fixtures';
import Results from './Results';
import Clubs from './Clubs';
import About from './About';
import Admin from './Admin';
import TourMaker from './TourMaker';
import Err404 from './Err404';

export default function App(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/raspored'><Fixtures /></Route>
        <Route path='/rezultati'><Results /></Route>
        <Route path='/klubovi'><Clubs /></Route>
        <Route path='/o-nama'><About /></Route>
        <Route path='/admin'><Admin /></Route>
        <Route path='/napravi-raspored'><TourMaker /></Route>
        <Route path='*'><Err404 /></Route>
      </Switch>
    </Router>
  );
}
