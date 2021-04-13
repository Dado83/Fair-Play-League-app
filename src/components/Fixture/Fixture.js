import React, { useState, useEffect } from 'react';

export default function Fixture(props) {
    const [fixture, setFixture] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/rest/getMatchPairs/${props.mDay}`)
            .then(r => r.json())
            .then(d => setFixture(d))
            .catch(e => console.log(e))
    })

    return (
        fixture.map(f => (
            <p>{f.home_club} - {f.away_club}</p>
        ))
    )
}
