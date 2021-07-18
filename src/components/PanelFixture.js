import React, { useState, useEffect } from 'react';

export default function PanelFixture(props) {
    const [fixture, setFixture] = useState([]);

    useEffect(() => {
        fetch(`http://${props.site}/api/fixtures.php?notPlayed=notPlayed&mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => setFixture(data))
            .catch(err => console.log(err))
    }, [props.mDay]);

    return (
        <table className='fixture'>
            <thead>
                <tr>
                    <th>{fixture[0]?.m_day}<span>{fixture[0]?.game_date}</span></th>
                </tr>
            </thead>
            <tbody>
                {fixture.map(fix => (
                    <tr key={fix.id}>
                        <td>{fix.home}{fix.home_team}</td>
                        <td>-</td>
                        <td>{fix.away}{fix.away_team}</td>
                        <button>unesi</button>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}
