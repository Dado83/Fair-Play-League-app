import { useEffect, useState } from 'react';
import { skTemp } from '../assets/sktestplay/skTemp';
import { sk } from '../assets/sktestplay/sk';
import SkSearch from '../components/SkTestP/SkSearch';
import SkGames from '../components/SkTestP/SkGames';
import '../assets/stylesSk.css';

export default function SkTestplay(props) {
  const [games, setGames] = useState([]);
  const [isTempList, setTempList] = useState(false);

  useEffect(() => {
    setGames(skTemp);
    setTempList(true);
  }, []);

  useEffect(() => {
    if (isTempList) {
      setGames(sk);
    }
  }, [isTempList]);

  useEffect(() => {
    window.addEventListener('orientationchange', (event) => {
      window.location.reload();
    });
  }, []);

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

  return (
    <article className='svet-kompjutera'>
      <SkSearch onSubmit={submit} list={games.length} />
      <SkGames list={games} />
    </article>
  );
}
