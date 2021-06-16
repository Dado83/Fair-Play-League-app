import React, { useState, useEffect } from 'react';

export default function Result(props) {
    const [result, setResult] = useState([]);

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

    return (
        <table className='result'>
            <thead>
                <tr>
                    <th colSpan='5'>{props.mDay}. kolo</th>
                </tr>
            </thead>
            <tbody>
                {result.map(res => (
                    <tr key={res.id}>
                        <td>{res.home_name}<img src={`http://localhost/api/logos/${res.home_id}.png`} /></td>
                        <td className={props.gen7}>{res.goals_home7}</td>
                        <td className={props.gen7}>-</td>
                        <td className={props.gen7}>{res.goals_away7}</td>
                        <td className={props.gen8}>{res.goals_home8}</td>
                        <td className={props.gen8}>-</td>
                        <td className={props.gen8}>{res.goals_away8}</td>
                        <td className={props.gen9}>{res.goals_home9}</td>
                        <td className={props.gen9}>-</td>
                        <td className={props.gen9}>{res.goals_away9}</td>
                        <td className={props.gen10}>{res.goals_home10}</td>
                        <td className={props.gen10}>-</td>
                        <td className={props.gen10}>{res.goals_away10}</td>
                        <td className={props.gen11}>{res.goals_home11}</td>
                        <td className={props.gen11}>-</td>
                        <td className={props.gen11}>{res.goals_away11}</td>
                        <td><img src={`http://localhost/api/logos/${res.away_id}.png`} />{res.away_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
