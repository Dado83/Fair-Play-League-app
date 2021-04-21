import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [result, setResult] = useState([]);
    const [mDay, setMday] = useState('');

    /* useEffect(() => {
        setMday(props.mDay);
    }, []) */

    useEffect(() => {
        let mounted = true
        setMday(props.mDay)
        console.log(`before fetch: ${mDay}`)
        fetch(`http://localhost/rest/getResultsByMday/${mDay}`)
            .then(r => r.json())
            .then(d => {
                if (mounted) {
                    setResult(d)
                    console.log(`inside fetch if mounted: ${mDay}`)
                }

            })
            .catch(e => console.log(e))

        return () => {
            mounted = false
            console.log(`inside cleanup: ${mDay}`)
        }
    }, [mDay])

    console.log(`result: ${mDay}`)

    return (
        <>
            <p>{mDay}. kolo</p>
            <table>
                <thead>
                    <tr>
                        <th>domacin</th>
                        <th>gost</th>
                        <th colSpan='2'>2007</th>
                        <th colSpan='2'>2008</th>
                        <th colSpan='2'>2009</th>
                        <th colSpan='2'>2010</th>
                        <th colSpan='2'>2011</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(r => (
                        <tr key={r.id}>
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
