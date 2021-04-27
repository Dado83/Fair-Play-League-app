import React, { useState, useEffect } from 'react';

export default function Fixture(props) {
    const [fixture, setFixture] = useState([]);
    const [mDay, setMday] = useState('');

    useEffect(() => {
        setMday(props.mDay);
        fetch(`http://localhost/rest/getMatchPairs/${props.mDay}`)
            .then(response => response.json())
            .then(data => setFixture(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <p>{mDay}. kolo</p>
            {fixture.map(fix => (
                <p key={fix.id}>{fix.home_club} - {fix.away_club}</p>
            ))}
        </>
    );
}
