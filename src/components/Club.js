import React, { useState, useEffect } from 'react';

export default function Clubs(props) {
    const [club, setClub] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`http://${props.site}/api/teams.php?id=${props.id}`)
            .then(response => response.json())
            .then(data => setClub(data))
            .catch(err => console.log(err))
    }, [props.id]);

    useEffect(() => {
        fetch(`http://${props.site}/api/results.php?clubid=${props.id}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <div className='club-info'>
                <img src={`http://${props.site}/api/logos-big/${props.id}.png`} />
                <p>{club.team_name}</p>
                <p>{club.team_city}</p>
                <p>{club.kit_color}</p>
                <p>{club.venue}</p>
                <p>{club.game_time}</p>
                <details>
                    <summary>Rezultati</summary>
                    <div className='club-results' id={`club${props.id}`}>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>2007</td>
                                    <td>2008</td>
                                    <td>2009</td>
                                    <td>2010</td>
                                    <td>2011</td>
                                </tr>
                            </thead>
                            {results.map(res => (
                                <tbody>
                                    <tr>
                                        <td>{res.m_day}. kolo</td>
                                    </tr>
                                    <tr key={res.id}>
                                        <td>{res.home_name}</td>
                                        <td className={props.gen7}>{res.goals_home7 != -1 ? res.goals_home7 : '*'}</td>
                                        <td className={props.gen8}>{res.goals_home8}</td>
                                        <td className={props.gen9}>{res.goals_home9}</td>
                                        <td className={props.gen10}>{res.goals_home10 != -1 ? res.goals_home10 : '*'}</td>
                                        <td className={props.gen11}>{res.goals_home11 != -1 ? res.goals_home11 : '*'}</td>
                                    </tr>
                                    <tr>
                                        <td>{res.away_name}</td>
                                        <td className={props.gen7}>{res.goals_away7 != -1 ? res.goals_away7 : '*'}</td>
                                        <td className={props.gen8}>{res.goals_away8}</td>
                                        <td className={props.gen9}>{res.goals_away9}</td>
                                        <td className={props.gen10}>{res.goals_away10 != -1 ? res.goals_away10 : '*'}</td>
                                        <td className={props.gen11}>{res.goals_away11 != -1 ? res.goals_away11 : '*'}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </details>
            </div>
        </>
    );
}
