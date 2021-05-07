import React, { useState, useEffect } from 'react';

export default function Fixture(props) {
    const [fixture, setFixture] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/api/fixtures.php?mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => setFixture(data))
            .catch(err => console.log(err))
    }, [props.mDay]);

    return (
        <table>
            <thead>
                <tr>
                    <td>{props.mDay}. kolo</td>
                </tr>
            </thead>
            <tbody>
                {fixture.map(fix => (
                    <tr key={fix.id}>
                        <td>{fix.home_club}</td>
                        <td>-</td>
                        <td>{fix.away_club}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
