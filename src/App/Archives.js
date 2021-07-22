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

  useEffect(() => {
    let url = fetch(`http://${site}/api/archive.php?year=alltime`);
    url.then(response => response.json())
      .then(data => setTable(data))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    let urls = new Map();
    urls.set(archive14_15, `http://${site}/api/archive.php?year=archive14_15`);
    urls.set(archive15_16, `http://${site}/api/archive.php?year=archive15_16`);
    urls.set(archive16_17, `http://${site}/api/archive.php?year=archive16_17`);
    urls.set(archive17_18, `http://${site}/api/archive.php?year=archive17_18`);
    urls.set(archive18_19, `http://${site}/api/archive.php?year=archive18_19`);
    urls.set(archive19_20, `http://${site}/api/archive.php?year=archive19_20`);
    urls.set(archive20_21, `http://${site}/api/archive.php?year=archive20_21`);

    fetch(urls.get(archive14_15))
      .then(response => response.json())
      .then(data => {
        setArchive(data);
        setArchive14_15(data);
      })
      .catch(err => console.log(err))

    fetch(urls.get(archive15_16))
      .then(response => response.json())
      .then(data => setArchive15_16(data))
      .catch(err => console.log(err))

    fetch(urls.get(archive16_17))
      .then(response => response.json())
      .then(data => setArchive16_17(data))
      .catch(err => console.log(err))

    fetch(urls.get(archive17_18))
      .then(response => response.json())
      .then(data => setArchive17_18(data))
      .catch(err => console.log(err))

    fetch(urls.get(archive18_19))
      .then(response => response.json())
      .then(data => setArchive18_19(data))
      .catch(err => console.log(err))

    fetch(urls.get(archive19_20))
      .then(response => response.json())
      .then(data => setArchive19_20(data))
      .catch(err => console.log(err))

    fetch(urls.get(archive20_21))
      .then(response => response.json())
      .then(data => setArchive20_21(data))
      .catch(err => console.log(err))
  }, []);

  const buttonSelection = (param) => {
    const siblings = param.target.parentNode.children;
    for (let s of siblings) {
      s.className = 'button-default';
    }
    param.target.className = 'button-selected'
  }

  return (
    <>
      <div className='home-button'>
        <button className='button-selected' onClick={(e) => {
          setArchive(prevState => archive14_15);
          buttonSelection(e);
        }}>14/15</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive15_16);
          buttonSelection(e);
        }}>15/16</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive16_17);
          buttonSelection(e);
        }}>16/17</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive17_18);
          buttonSelection(e);
        }}>17/18</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive18_19);
          buttonSelection(e);
        }}>18/19</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive19_20);
          buttonSelection(e);
        }}>19/20</button>
        <button className='button-default' onClick={(e) => {
          setArchive(prevState => archive20_21);
          buttonSelection(e);
        }}>20/21</button>
      </div>
      <div className='content'>
        <Archive archive={archive} site={site} />
        <TableAlltime site={site} table={table} />
      </div>
    </>
  );
}
