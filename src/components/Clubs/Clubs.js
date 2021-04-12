import React, { useState, useEffect } from 'react';

export default function Clubs(props) {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch('http://localhost/rest/getTeams')
            .then(r => r.json())
            .then(d => setClubs(d))
            .catch(e => console.log(e))
    }, [])

    return (
        clubs.map(c => (
            <p>{c.team_name}</p>
        ))
    )
}
