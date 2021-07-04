import React, { useState, useEffect } from 'react';


export default function Login(props) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});

    useEffect(() => {
        fetch(`http://localhost/api/users.php`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
                console.log(users.role);
            })
            .catch(error => console.log(error));
    }, [userName])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName !== 'admin') {
            console.log('nema tog korisnika');
            console.log('not admin: ', userName)
        } else {
            console.log(' admin: ', userName)
            fetch(`http://localhost/api/users.php?user=${userName}&pass=${password}`)
                .then(response => response.json())
                .then(data => {
                    let role = data;
                    console.log(role);
                    console.log('Success: ', data);
                    sessionStorage.setItem('role', role);
                    props.onChange(role);
                    console.log('sess role: ', sessionStorage.getItem('role'))
                })
                .catch((error) => {
                    console.log('Error: ', error)
                });
        }
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
