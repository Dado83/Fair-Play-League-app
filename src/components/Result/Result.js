import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Result(props) {
    const [result, setResult] = useState([]);
    const [mDay, setMday] = useState('');

    useEffect(() => {
        let mounted = true;
        setMday(props.mDay);
        console.log(`before fetch: ${mDay}`);
        fetch(`http://localhost/api/results.php?mday=${mDay}`)
            .then(response => response.json())
            .then(data => {
                if (mounted) {
                    setResult(data);
                    console.log(`inside fetch if mounted: ${mDay}`);
                }
            })
            .catch(err => console.log(err));

        return () => {
            mounted = false;
            console.log(`inside cleanup: ${mDay}`);
        }
    }, [props.mDay, mDay]);

    console.log(`result: ${mDay}`);

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
                    {result.map(res => (
                        <tr key={res.id}>
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
        </>
    );
}
