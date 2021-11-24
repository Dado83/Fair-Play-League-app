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
    let url = new Map();
    url.set('vis', fetch(`http://${site}/api/visitors.php?counter=getvisits`));
    url.set('hit', fetch(`http://${site}/api/visitors.php?counter=gethits`));
    url.set('day', fetch(`http://${site}/api/visitors.php?counter=getday`));
    url.set('hrs2', fetch(`http://${site}/api/visitors.php?counter=get2hrs`));

    const getData = async () => {
      try {
        const [vis, hit, day, hrs2] = await Promise.all([
          url.get('vis'),
          url.get('hit'),
          url.get('day'),
          url.get('hrs2'),
        ]);

        if (!vis.ok) {
          throw Error('response not ok');
        }

        const visJ = await vis.json();
        const hitJ = await hit.json();
        const dayJ = await day.json();
        const hrs2J = await hrs2.json();

        setVisits((prevState) => visJ);
        setHits((prevState) => hitJ);
        setLastDay((prevState) => dayJ);
        setLast2hrs((prevState) => hrs2J);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const handleChange = (param) => {
    setUser((user) => param);
  };

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
      <h2>
        Panel
        <button
          style={{ float: 'right' }}
          onClick={() => {
            setUser((user) => sessionStorage.removeItem('role'));
          }}>
          logout
        </button>
      </h2>
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
