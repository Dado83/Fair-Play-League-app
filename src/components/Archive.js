import React, { useEffect, useState } from 'react';

export default function Archive(props) {
    const [archive, setArchive] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/api/archive.php?year=${props.year}`)
            .then(response => response.json())
            .then(data => setArchive(data))
            .catch(err => console.log(err))
    }, [props.year]);

    return (
        <>
            <table className='ar-increase table archive'>
                <tr>
                    <td>#</td>
                    <td></td>
                    <td>1.mjesto</td>
                    <td>2. mjesto</td>
                    <td>3. mjesto</td>
                    <td>4. mjesto</td>
                    <td>bod</td>
                </tr>
                {archive.map((arc, index) => (
                    <tr>
                        <td>{++index}.</td>
                        <td>{arc.team}</td>
                        <td>{arc.first}</td>
                        <td>{arc.second}</td>
                        <td>{arc.third}</td>
                        <td>{arc.fourth}</td>
                        <td>{arc.points}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}

