import React, { useState, useEffect } from 'react';
import Archive from '../components/Archive';
import TableAlltime from '../components/TableAlltime';

export default function Archives() {
  const site = document.location.hostname;
  const [table, setTable] = useState([]);
  const [archive14_15, setArchive14_15] = useState([]);
  const [archive15_16, setArchive15_16] = useState([]);
  const [archive16_17, setArchive16_17] = useState([]);
  const [archive17_18, setArchive17_18] = useState([]);
  const [archive18_19, setArchive18_19] = useState([]);
  const [archive19_20, setArchive19_20] = useState([]);
  const [archive20_21, setArchive20_21] = useState([]);
  const [archive, setArchive] = useState([]);

  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  useEffect(() => {
    let url = fetch(`http://${site}/api/archive.php?year=alltime`);
    url
      .then((response) => response.json())
      .then((data) => setTable(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let urls = new Map();
    urls.set(archive14_15, fetch(`http://${site}/api/archive.php?year=archive14_15`));
    urls.set(archive15_16, fetch(`http://${site}/api/archive.php?year=archive15_16`));
    urls.set(archive16_17, fetch(`http://${site}/api/archive.php?year=archive16_17`));
    urls.set(archive17_18, fetch(`http://${site}/api/archive.php?year=archive17_18`));
    urls.set(archive18_19, fetch(`http://${site}/api/archive.php?year=archive18_19`));
    urls.set(archive19_20, fetch(`http://${site}/api/archive.php?year=archive19_20`));
    urls.set(archive20_21, fetch(`http://${site}/api/archive.php?year=archive20_21`));

    const getData = async () => {
      try {
        const [a14_15, a15_16, a16_17, a17_18, a18_19, a19_20, a20_21] = await Promise.all([
          urls.get(archive14_15),
          urls.get(archive15_16),
          urls.get(archive16_17),
          urls.get(archive17_18),
          urls.get(archive18_19),
          urls.get(archive19_20),
          urls.get(archive20_21),
        ]);

        if (!a14_15.ok) {
          throw Error(a14_15);
        }
        const a14 = await a14_15.json();
        const a15 = await a15_16.json();
        const a16 = await a16_17.json();
        const a17 = await a17_18.json();
        const a18 = await a18_19.json();
        const a19 = await a19_20.json();
        const a20 = await a20_21.json();

        setArchive((prevState) => a14);
        setArchive14_15((prevState) => a14);
        setArchive15_16((prevState) => a15);
        setArchive16_17((prevState) => a16);
        setArchive17_18((prevState) => a17);
        setArchive18_19((prevState) => a18);
        setArchive19_20((prevState) => a19);
        setArchive20_21((prevState) => a20);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const buttonSelection = (param) => {
    const siblings = param.target.parentNode.children;
    for (let s of siblings) {
      s.className = 'button-default';
    }
    param.target.className = 'button-selected';
  };

  return (
    <>
      <div className='home-button'>
        <button
          className='button-selected'
          onClick={(e) => {
            setArchive((prevState) => archive14_15);
            buttonSelection(e);
          }}>
          14/15
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive15_16);
            buttonSelection(e);
          }}>
          15/16
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive16_17);
            buttonSelection(e);
          }}>
          16/17
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive17_18);
            buttonSelection(e);
          }}>
          17/18
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive18_19);
            buttonSelection(e);
          }}>
          18/19
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive19_20);
            buttonSelection(e);
          }}>
          19/20
        </button>
        <button
          className='button-default'
          onClick={(e) => {
            setArchive((prevState) => archive20_21);
            buttonSelection(e);
          }}>
          20/21
        </button>
      </div>
      <div className='content'>
        <Archive archive={archive} site={site} />
        <TableAlltime site={site} table={table} />
      </div>
    </>
  );
}
