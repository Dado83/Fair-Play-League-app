import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [result, setResult] = useState([]);
    const [gameDate, setGameDate] = useState('/');

    useEffect(() => {
        let mounted = true;
        fetch(`http://localhost/api/results.php?mday=${props.mDay}`)
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

    useEffect(() => {
        let mounted = true;
        fetch(`http://localhost/api/fixtures.php?mday=${props.mDay}`)
            .then(response => response.json())
            .then(data => {
                if (mounted) {
                    setGameDate(data);
                }
            })
            .catch(err => console.log(err));

        return () => { mounted = false };
    }, props.mDay);

    return (
        <table className='result-page'>
            <thead>
                <tr>
                    <th>{props.mDay}. kolo ({gameDate[0].game_date})</th>
                    <th colSpan='' className={props.gen7}>2007</th>
                    <th colSpan='' className={props.gen8}>2008</th>
                    <th colSpan='' className={props.gen9}>2009</th>
                    <th colSpan='' className={props.gen10}>2010</th>
                    <th colSpan='' className={props.gen11}>2011</th>
                    <th></th>
                </tr>
            </thead>
            {result.map(res => (
                <tbody>
                    <tr key={res.id}>
                        <td><img src={`http://localhost/api/logos/${res.home_id}.png`} />{res.home_name}</td>
                        <td className={props.gen7}>{res.goals_home7 != -1 ? res.goals_home7 : '*'}</td>
                        <td className={props.gen8}>{res.goals_home8}</td>
                        <td className={props.gen9}>{res.goals_home9}</td>
                        <td className={props.gen10}>{res.goals_home10 != -1 ? res.goals_home10 : '*'}</td>
                        <td className={props.gen11}>{res.goals_home11 != -1 ? res.goals_home11 : '*'}</td>
                    </tr>
                    <tr>
                        <td><img src={`http://localhost/api/logos/${res.away_id}.png`} />{res.away_name}</td>
                        <td className={props.gen7}>{res.goals_away7 != -1 ? res.goals_away7 : '*'}</td>
                        <td className={props.gen8}>{res.goals_away8}</td>
                        <td className={props.gen9}>{res.goals_away9}</td>
                        <td className={props.gen10}>{res.goals_away10 != -1 ? res.goals_away10 : '*'}</td>
                        <td className={props.gen11}>{res.goals_away11 != -1 ? res.goals_away11 : '*'}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
}
