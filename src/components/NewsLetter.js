import React, { useState, useEffect } from 'react';
import ResultPage from './ResultPage';
import Table from './Table';
import Fixture from './Fixture';


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
            <p>Bilten</p>
            <p>biltencic</p>
            <ResultPage mDay={2} site={site} />
            <Table site={site} table={table7} selection={2007} />
            <Table site={site} table={table8} selection={2008} />
            <Table site={site} table={table9} selection={2009} />
            <Table site={site} table={table10} selection={2010} />
            <Table site={site} table={table11} selection={2011} />
            <Fixture site={site} mDay={11} />
        </>
    )
}
