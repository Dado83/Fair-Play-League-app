import React, { useState, useEffect } from 'react';


export default function Login(props) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName !== 'admin') {
            setError(prevState => 'korisnik ne postoji');
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
                body: JSON.stringify(credentials)
            };
            fetch(`http://${props.site}/api/users.php`, reqOptions)
                .then(response => response.json())
                .then(data => {
                    let role = data;
                    sessionStorage.setItem('role', role);
                    props.onRoleChange(role);
                    console.log('sess role: ', sessionStorage.getItem('role'));
                    if (role == 'not-admin') {
                        setError(prevState => 'netacna lozinka');
                    }
                })
                .catch(err => console.log('error: ', err));
        }
    }

    return (
        <>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <label for='user'>Korisnik: {userName}
                </label>
                <input type='text' name='user' onChange={(e) => { setUsername(e.target.value) }} />
                <label for='pass'>Lozinka: {password}
                </label>
                <input type='password' name='pass' onChange={(e) => { setPassword(e.target.value) }} />
                <input type='submit' value='dalje' />
            </form>
        </>
    )
}
