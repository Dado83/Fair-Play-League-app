import React, { useState, useEffect } from 'react';

export default function Clubs(props) {
    const [club, setClub] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/api/teams.php?id=${props.id}`)
            .then(response => response.json())
            .then(data => setClub(data))
            .catch(err => console.log(err))
    }, [props.id]);

    useEffect(() => {
        fetch(`http://localhost/api/results.php?clubid=${props.id}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <div className='club-info'>
                <p>{club.id}</p>
                <p>{club.team_name}</p>
                <p>{club.team_city}</p>
                <p>{club.kit_color}</p>
                <p>{club.venue}</p>
                <p>{club.game_time}</p>
                <details>
                    <summary>Rezultati</summary>
                    <div className='club-results' id={`club${props.id}`}>
                        <table>
                            <tbody>
                                {results.map((res) => (
                                    <tr key={res.id}>
                                        <td>{res.m_day}</td>
                                        <td>{res.home_name}</td>
                                        <td>{res.away_name}</td>
                                        <td>{res.goals_home7}</td>
                                        <td>{res.goals_away7}</td>
                                        <td>{res.goals_home8}</td>
                                        <td>{res.goals_away8}</td>
                                        <td>{res.goals_home9}</td>
                                        <td>{res.goals_away9}</td>
                                        <td>{res.goals_home10}</td>
                                        <td>{res.goals_away10}</td>
                                        <td>{res.goals_home11}</td>
                                        <td>{res.goals_away11}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>
        </>
    );
}