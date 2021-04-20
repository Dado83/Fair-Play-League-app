import React, { useState, useEffect } from 'react';
import './style.css';

export default function Clubs(props) {
    const [club, setClub] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/rest/getTeamByID/${props.id}`)
            .then(r => r.json())
            .then(d => setClub(d))
            .catch(e => console.log(e))
    }, []);

    const showInfo = (id) => {
        const info = document.getElementsByClassName('club-info')
        for (const i of info) {
            i.style = 'display:none'
        }
        const clubId = `club${id}`;
        document.getElementById(clubId).style = 'display:block'
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

            </div>
        </div>
    )
}
