import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';


export default function Admin(props) {
  const site = document.location.hostname;
  const [user, setUser] = useState('');
  const [visits, setVisits] = useState('');
  const [hits, setHits] = useState('');
  const [lastDay, setLastDay] = useState('');
  const [last2hrs, setLast2hrs] = useState('');

  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=getvisits`)
      .then(response => response.json())
      .then(data => setVisits(prevState => data))
      .catch(err => console.log(err));

    fetch(`http://${site}/api/visitors.php?counter=gethits`)
      .then(response => response.json())
      .then(data => setHits(prevState => data))
      .catch(err => console.log(err));

    fetch(`http://${site}/api/visitors.php?counter=getday`)
      .then(response => response.json())
      .then(data => setLastDay(prevState => data))
      .catch(err => console.log(err));

    fetch(`http://${site}/api/visitors.php?counter=get2hrs`)
      .then(response => response.json())
      .then(data => setLast2hrs(prevState => data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (param) => {
    setUser(user => param);
  }

  if (sessionStorage.getItem('role') != 'admin') {
    return (
      <div className='content'>
        <h2>Panel</h2>
        <Login onRoleChange={handleChange} site={site} />
      </div>
    );
  }

  return (
    <>
      <h2>Panel
        <button style={{ float: 'right' }} onClick={() => {
          setUser(user => sessionStorage.removeItem('role'))
        }}>logout</button></h2>
      <p>Posjete: {visits}</p>
      <p>Prethodni dan:{lastDay}</p>
      <p>Zadnja 2 sata:{last2hrs}</p>
      <p>Pregledi:{hits}</p>
      <div className='content'>
        <Dashboard />
      </div>
    </>
  );
}
