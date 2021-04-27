import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Err404(props) {

  return (
    <>
      <h1>Nema stranice...</h1>
      <Link to='/'>aj nazad kuci</Link>
    </>
  );
}
