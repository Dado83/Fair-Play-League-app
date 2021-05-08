import React, { useState, useEffect } from 'react';
import './styles.css';

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

    const showInfo = (id) => {
        const info = document.getElementsByClassName('club-info');
        for (const i of info) {
            i.style = 'display:none';
        }
        const clubId = `club${id}`;
        document.getElementById(clubId).style = 'display:block';
    }

    return (
        <div>
            <h3 onClick={() => showInfo(club.id)}>{club.team_name}</h3>
            <div className='club-info' id={`club${props.id}`}>
                <p>{club.id}</p>
                <p>{club.team_name}</p>
                <p>{club.team_city}</p>
                <p>{club.kit_color}</p>
                <p>{club.venue}</p>
                <p>{club.game_time}</p>
                <div>Resultati:</div>
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
        </div>
    );
}
