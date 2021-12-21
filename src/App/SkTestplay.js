import { useEffect, useState } from 'react';
import { skTemp } from '../assets/sktestplay/skTemp';
import { sk } from '../assets/sktestplay/sk';

export default function SkTestplay(props) {
  useEffect(() => {
    window.addEventListener('orientationchange', (event) => {
      window.location.reload();
    });
  }, []);

  console.log(typeof skTemp);

  const submit = (e) => {
    e.preventDefault();
  };

  /*
  let tbody = document.querySelector('tbody');
  let form = document.querySelector('form');

  let search = document.querySelector('#search');
  search.addEventListener('mousedown', () => loader('block'));
  search.addEventListener('touchstart', () => loader('block'));
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = form.elements['title'].value ? form.elements['title'].value : '';
    let author = form.elements['author'].value ? form.elements['author'].value : '';
    let score = form.elements['score'].value ? form.elements['score'].value : 0;
    let platform = form.elements['platform'].value ? form.elements['platform'].value : '';

    let result = gameList
      .filter((game) => game['title'].toLowerCase().includes(title.toLowerCase()))
      .filter((game) => game['author'].toLowerCase().includes(author.toLowerCase()))
      .filter((game) => game['score'] >= score)
      .filter((game) => game['platform'].toLowerCase().includes(platform.toLowerCase()));
    tbody.innerHTML = '';
    createTable(result);
    loader('none');
  });

  let reset = document.querySelector('#reset');
  reset.addEventListener('mousedown', () => loader('block'));
  reset.addEventListener('touchstart', () => loader('block'));
  form.addEventListener('reset', (event) => {
    tbody.innerHTML = '';
    createTable(gameList);
    loader('none');
  });

  let tempList = [];
  let jsonFileInitial = fetch('/public/resources/skTemp.json');
  jsonFileInitial
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        tempList[i] = data[i];
      }
      createTable(tempList);
      document.querySelector('#links').innerHTML += '... učitavam ostale linkove';
    });

  let gameList = [];
  let jsonFile = fetch('/public/resources/sk.json');
  jsonFile
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        gameList[i] = data[i];
      }
      createTable(gameList);
    });

  function createTable(list) {
    document.getElementById('links').innerHTML = list.length;
    tbody.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      td4.className = 'hidden';
      td.textContent = `${list[i]['date']}`;
      td1.innerHTML = `<a href=${list[i]['link']}>${list[i]['title']}</a>`;
      td2.textContent = `${list[i]['author']}`;
      td3.textContent = `${list[i]['score']}`;
      td4.textContent = `${list[i]['platform']}`;
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tbody.appendChild(tr);
    }
  }
  */

  return (
    <>
      <form onSubmit={submit}>
        <p>
          <a href='https://www.sk.rs/arhiva/rubrika/test-play'>
            <span id='sk'>Svet Kompjutera</span>
          </a>
        </p>
        <fieldset>
          <legend>
            TEST PLAY(<span id='links'></span>)
          </legend>
          <label for='title'>Naslov</label>
          <input type='text' id='title' placeholder='The Witcher 3: Wild Hunt' />
          <label for='author'>Autor</label>
          <input type='text' id='author' placeholder='Miodrag KUZMANOVIĆ' />
          <label for='score'>Ocjena</label>
          <input type='number' id='score' min='1' max='99' placeholder='90' />
          <label for='platform'>Platforma</label>
          <input type='text' id='platform' placeholder='PC, PlayStation 4, Xbox One' />
          <input type='reset' class='button' id='reset' value='Reset' />
          <input type='submit' class='button' id='search' value='Pretraga' />
        </fieldset>
      </form>
      <table>
        <thead>
          <tr class='row'>
            <th>Datum</th>
            <th>Naslov</th>
            <th>Autor</th>
            <th>Ocjena</th>
            <th class='hidden'>Platforma</th>
          </tr>
        </thead>
        <tbody>
          {sk.map((g) => (
            <tr>
              <td>{g.date}</td>
              <td>{g.title}</td>
              <td>{g.author}</td>
              <td>{g.score}</td>
              <td>{g.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
