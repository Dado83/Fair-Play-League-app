import React, { useEffect, useState } from 'react';


export default function Archive(props) {
    return (
        <div>
            <table className='ar-increase table archive'>
                <tr>
                    <td>#</td>
                    <td></td>
                    <td>🥇</td>
                    <td>🥈</td>
                    <td>🥉</td>
                    <td>🏅</td>
                    <td>bod</td>
                </tr>
                {props.archive.map((arc, index) => (
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
            <div className='legend'>
                <p>🥇 1. mjesto</p>
                <p>🥈 2. mjesto</p>
                <p>🥉 3. mjesto</p>
                <p>🏅 4. mjesto</p>
            </div>
        </div>

    );
}

