import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [result, setResult] = useState([]);
    const [mDay, setMday] = useState('');

    useEffect(() => {
        setMday(props.mDay);
    }, [])

    useEffect(() => {
        fetch(`http://localhost/rest/getResultsByMday/${props.mDay}`)
            .then(r => r.json())
            .then(d => setResult(d))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <p>{mDay}. kolo</p>
            <table>
                <tbody>
                    <th>domacin</th>
                    <th>gost</th>
                    <th colSpan='2'>2007</th>
                    <th colSpan='2'>2008</th>
                    <th colSpan='2'>2009</th>
                    <th colSpan='2'>2010</th>
                    <th colSpan='2'>2011</th>
                    {result.map(r => (
                        <tr>
                            <td>{r.home_name}</td>
                            <td>{r.away_name}</td>
                            <td>{r.goals_home7}</td>
                            <td>{r.goals_away7}</td>
                            <td>{r.goals_home8}</td>
                            <td>{r.goals_away8}</td>
                            <td>{r.goals_home9}</td>
                            <td>{r.goals_away9}</td>
                            <td>{r.goals_home10}</td>
                            <td>{r.goals_away10}</td>
                            <td>{r.goals_home11}</td>
                            <td>{r.goals_away11}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
