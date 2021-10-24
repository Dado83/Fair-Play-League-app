import React, { useState, useEffect } from 'react';
import NRPage from './NRPage';
import NFix from './NFix';
import NTable from './NTable';


export default function NewsLetter(props) {
    const site = document.location.hostname;
    const [leagueOver, setLeagueOver] = useState(false);
    const [nextMday, setNextMday] = useState('');
    const [table7, setTable7] = useState([]);
    const [table8, setTable8] = useState([]);
    const [table9, setTable9] = useState([]);
    const [table10, setTable10] = useState([]);
    const [table11, setTable11] = useState([]);
    const [selection, setSelection] = useState('');

    useEffect(() => {
        let url = new Map();
        url.set(7, `http://${site}/api/table.php?table=table7&id1=5&id2=8&id3=9&id4=10`);
        url.set(8, `http://${site}/api/table.php?table=table8`);
        url.set(9, `http://${site}/api/table.php?table=table9`);
        url.set(10, `http://${site}/api/table.php?table=table10&id1=11`);
        url.set(11, `http://${site}/api/table.php?table=table11&id1=4`);

        fetch(url.get(7))
            .then(response => response.json())
            .then(data => setTable7(prevState => data))
            .catch(err => console.log(err));

        fetch(url.get(8))
            .then(response => response.json())
            .then(data => setTable8(prevState => data))
            .catch(err => console.log(err));

        fetch(url.get(9))
            .then(response => response.json())
            .then(data => setTable9(prevState => data))
            .catch(err => console.log(err));

        fetch(url.get(10))
            .then(response => response.json())
            .then(data => setTable10(prevState => data))
            .catch(err => console.log(err));

        fetch(url.get(11))
            .then(response => response.json())
            .then(data => setTable11(prevState => data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`http://${site}/api/results.php?nextfix=nextfix`)
            .then(response => response.json())
            .then(data => {
                if (data > 11) {
                    setLeagueOver(true);
                }
                setNextMday(prevState => data)
            })
            .catch(err => console.log(err));
    }, []);

    //ispraviti Fixture kad podesim css
    return (
        <>
            <div className='newsletter'>
                <h1>FAIR PLAY Liga Budućih Šampiona</h1>
                <h2>takmičarska sezona 2020/21</h2>
                <h3>Bilten br. ??4</h3>
                <p>1. Registracija utakmica 4. kola</p>
                <p>2. Raspored utakmica 5. kola</p>
            </div>
            <p className='ad'>ad 1)</p>
            <NRPage mDay={2} site={site} />
            <NTable site={site} table={table7} selection={2007} />
            <NTable site={site} table={table8} selection={2008} />
            <NTable site={site} table={table9} selection={2009} />
            <NTable site={site} table={table10} selection={2010} />
            <NTable site={site} table={table11} selection={2011} />
            <p className='ad'>ad 2)</p>
            <NFix site={site} mDay={11} />
        </>
    )
}
