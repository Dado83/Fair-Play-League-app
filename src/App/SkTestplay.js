import { useEffect, useState } from 'react';
import { skTemp } from '../assets/sktestplay/skTemp';
import { sk } from '../assets/sktestplay/sk';
import SkSearch from '../components/SkTestP/SkSearch';
import SkGames from '../components/SkTestP/SkGames';

export default function SkTestplay(props) {
  const [games, setGames] = useState(sk);

  useEffect(() => {
    window.addEventListener('orientationchange', (event) => {
      window.location.reload();
    });
  }, []);

  /* useEffect(() => {
    console.log(games.length);

  }, [games]); */

  const submit = (param) => {
    const searchV = param;
    console.log('search: ', param);
    console.log('games full: ', games.length);
    let res = sk
      .filter((g) => g.title.toLowerCase().includes(searchV.title.toLowerCase()))
      .filter((g) => g.author.toLowerCase().includes(searchV.author.toLowerCase()))
      .filter((g) => g.score >= searchV.score)
      .filter((g) => g.platform.toLowerCase().includes(searchV.platform.toLowerCase()));

    //console.log('game test: ', games[0]);

    console.log('searchValues: ', searchV);
    console.log('searched games: ', res.length);
    setGames(res);
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
      <SkSearch onSubmit={submit} />
      <SkGames list={games} />
    </>
  );
}
