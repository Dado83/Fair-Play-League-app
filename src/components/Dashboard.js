import React, { useState, useEffect } from 'react';
import PanelResult from './PanelResult';
import PanelFixture from './PanelFixture';


export default function Dashboard(props) {
    const site = document.location.hostname; console.log(site);
    const [mDay, setMday] = useState('');

    useEffect(() => {
        fetch(`http://${site}/api/results.php?maxmday=true`)
            .then(response => response.json())
            .then(data => setMday(data))
            .catch(err => console.log(err));
    }, []);

    let results = [];
    for (let i = 1; i <= mDay; i++) {
        results[i] = <PanelResult key={i} mDay={i} site={site} />
    }

    let fixtures = [];
    for (let i = 1; i <= 11; i++) {
        fixtures[i] = <PanelFixture key={i} site={site} mDay={i} />
    }

    return (
        <>
            <div className='content'>
                <p>Rezultati:</p>
                {results.map(res =>
                    res)}
                <p>Raspored:</p>
                {fixtures.map(fix => fix)}
            </div>
        </>
    )
}
