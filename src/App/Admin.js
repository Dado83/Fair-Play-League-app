import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default function Admin(props) {
  const [php, setphp] = useState([]);

  useEffect(() => {
    fetch('http://localhost/db.php')
      .then(res => {
        console.log(res);
        //console.log(php);
        return res.json();
      })
      .then(data => {
        console.log(data);
        //console.log(php);
        setphp(data);
        console.log(php);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='content'>
      <h1>admin</h1>
      {php.team_name}
    </div>
  );
}
