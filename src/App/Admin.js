import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';


export default function Admin(props) {
  const site = document.location.hostname;
  const [user, setUser] = useState('');

  const handleChange = (param) => {
    setUser(param);
  }

  if (sessionStorage.getItem('role') != 'admin') {
    return (
      <div className='content'>
        <h1>admin: {user}</h1>
        <Login onChange={handleChange} site={site} />
      </div>
    );
  }

  return (
    <div className='content'>
      <h1>user: {user}</h1>
      <button onClick={() => {
        setUser(sessionStorage.removeItem('role'))
      }}>logout</button>
      <Dashboard />
    </div>
  );
}
