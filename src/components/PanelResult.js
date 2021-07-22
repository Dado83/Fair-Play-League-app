import React, { useState, useEffect } from 'react';


export default function PanelResult(props) {
    const [result, setResult] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        let mounted = true;
        fetch(`http://${props.site}/api/results.php?mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => {
                if (mounted) {
                    setResult(data);
                }
            })
            .catch(err => console.log(err));

        return () => {
            mounted = false;
        }
    }, [props.mDay]);

    const deleteGame = (id) => {
        console.log(id);
        let gameID = JSON.parse(id);
        console.log(gameID);
        fetch(`http://${props.site}/api/game.php?game=delete&gameID=${gameID}`)
            .then(response => response.json())
            .then(data => setInfo(data))
            .catch(err => console.log(err));
        window.location.reload();// to be changed to something more react appropriate :)
    }

    return (
        <table className='result'>
            <thead>
                <tr>
                    <th colSpan='4'>{props.mDay}. kolo</th>
                </tr>
            </thead>
            <tbody>
                {result.map(res => (
                    <tr key={res.id}>
                        <td>{res.home_name}<img src={`http://${props.site}/api/logos/${res.home_id}.png`} /></td>
                        <td>-</td>
                        <td><img src={`http://${props.site}/api/logos/${res.away_id}.png`} />{res.away_name}</td>
                        <button onClick={() => deleteGame(res.id)}>Brisi</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
