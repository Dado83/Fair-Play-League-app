import React, { useState, useEffect } from 'react';

export default function Fixture(props) {
    const [fixture, setFixture] = useState([]);

    useEffect(() => {
        fetch(`http://${props.site}/api/fixtures.php?mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => setFixture(prevState => data))
            .catch(err => console.log(err))
    }, [props.mDay]);

    return (
        <table className='fixture'>
            <thead>
                <tr>
                    <th colSpan='3'>{props.mDay}. kolo <span>{fixture[0]?.game_date}</span></th>
                </tr>
            </thead>
            <tbody>
                {fixture.map(fix => (
                    <tr key={fix.id}>
                        <td>{fix.home_club}<img src={`http://${props.site}/api/logos/${fix.home_team}.png`} /></td>
                        <td>-</td>
                        <td><img src={`http://${props.site}/api/logos/${fix.away_team}.png`} />{fix.away_club}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
