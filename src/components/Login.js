import React, { useState, useEffect } from 'react';


export default function Login(props) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost/api/users.php?user=${userName}&pass=${password}`)
            .then(response => response.json())
            .then(data => {
                let role = data;
                console.log('Success: ', data)
                sessionStorage.setItem('role', role);
                props.onChange(role);
            })
            .catch((error) => {
                console.log('Error: ', error)
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for='user'>Korisnik: {userName}
            </label>
            <input type='text' name='user' onChange={(e) => { setUsername(e.target.value) }} />
            <label for='pass'>Lozinka: {password}
            </label>
            <input type='password' name='pass' onChange={(e) => { setPassword(e.target.value) }} />
            <input type='submit' value='dalje' />
        </form>
    )
}
