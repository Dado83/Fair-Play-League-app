import React, { useState, useEffect } from 'react';

export default function Fixture(props) {
    const [fixture, setFixture] = useState([]);
    const [mDay, setMday] = useState('');

    useEffect(() => {
        setMday(props.mDay);
    }, [])

    useEffect(() => {
        fetch(`http://localhost/rest/getMatchPairs/${props.mDay}`)
            .then(r => r.json())
            .then(d => setFixture(d))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <p>{mDay}. kolo</p>
            {fixture.map(f => (
                <p key={f.id}>{f.home_club} - {f.away_club}</p>
            ))}
        </>
    )
}
