import React, { useState, useEffect } from 'react';
import { protocol } from '../utility/utility';

export default function Login(props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== 'admin') {
      setError((prevState) => 'korisnik ne postoji');
    } else {
      const credentials = {
        user: userName,
        pass: password,
      };
      const reqOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(credentials),
      };
      fetch(`${protocol}://${props.site}/api/users.php`, reqOptions)
        .then((response) => response.json())
        .then((data) => {
          let role = data;
          sessionStorage.setItem('role', role);
          props.onRoleChange(role);
          if (role === 'not-admin') {
            setError((prevState) => 'netacna lozinka');
          }
        })
        .catch((err) => console.log('error: ', err));
    }
  };

  return (
    <div className='login'>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Prijava korisnika</legend>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='user'>Korisnik:</label>
                </td>
                <td>
                  <input
                    type='text'
                    name='user'
                    autoComplete='on'
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoFocus
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor='pass'>Lozinka:</label>
                </td>
                <td>
                  <input
                    type='password'
                    name='pass'
                    autoComplete='off'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type='submit' value='dalje' />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
}
