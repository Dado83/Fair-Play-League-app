import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PanelFixture(props) {
    const [fixture, setFixture] = useState([]);

    useEffect(() => {
        fetch(`http://${props.site}/api/fixtures.php?notPlayed=notPlayed&mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => setFixture(prevState => data))
            .catch(err => console.log(err))
    }, [props.mDay]);

    useEffect(() => {
        let table = document.querySelector('.fixture tbody');
        console.log(table.innerHTML);
    })

    return (
        <table className='fixture'>
            <thead>
                <tr>
                    <th colSpan='4'>{fixture[0]?.m_day}<span>{fixture[0]?.game_date}</span></th>
                </tr>
            </thead>
            <tbody>
                {fixture.map(fix => (
                    <tr key={fix.id}>
                        <td>{fix.home}{fix.home_team}</td>
                        <td>-</td>
                        <td>{fix.away}{fix.away_team}</td>
                        <button><Link to={{
                            pathname: '/input',
                            state: {
                                mday: fixture[0]?.m_day,
                                id: fix.id,
                                homeID: fix.home_team,
                                homeTeam: fix.home,
                                awayID: fix.away_team,
                                awayTeam: fix.away,
                            },
                        }}>unesi</Link></button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
