import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';


export default function Admin(props) {
  const site = document.location.hostname;
  const [user, setUser] = useState('');

  const handleChange = (param) => {
    setUser(user => param);
  }

  if (sessionStorage.getItem('role') != 'admin') {
    return (
      <div className='content'>
        <h2>Panel: {user}</h2>
        <Login onRoleChange={handleChange} site={site} />
      </div>
    );
  }

  return (
    <div className='content'>
      <h2>Panel: {user}</h2>
      <button onClick={() => {
        setUser(user => sessionStorage.removeItem('role'))
      }}>logout</button>
      <Dashboard />
    </div>
  );
}
