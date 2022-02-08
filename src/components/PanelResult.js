import React, { useState, useEffect } from 'react';
import logo1 from '../assets/club-small/1.png';
import logo2 from '../assets/club-small/2.png';
import logo3 from '../assets/club-small/3.png';
import logo4 from '../assets/club-small/4.png';
import logo5 from '../assets/club-small/5.png';
import logo6 from '../assets/club-small/6.png';
import logo7 from '../assets/club-small/7.png';
import logo8 from '../assets/club-small/8.png';
import { protocol } from '../utility/utility';

export default function PanelResult(props) {
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);
  const logos = new Map();
  logos.set(1, logo1);
  logos.set(2, logo2);
  logos.set(3, logo3);
  logos.set(4, logo4);
  logos.set(5, logo5);
  logos.set(6, logo6);
  logos.set(7, logo7);
  logos.set(8, logo8);

  useEffect(() => {
    let mounted = true;
    fetch(`${protocol}://${props.site}/api/results.php?mday=${props.mDay}`)
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setResult((prevState) => data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, [props.mDay]);

  const deleteGame = (id) => {
    let ok = window.confirm('Brisem rezultat?');
    if (ok) {
      console.log(id);
      let gameID = JSON.parse(id);
      fetch(`${protocol}://${props.site}/api/game.php?game=delete&gameID=${gameID}`)
        .then((response) => response.json())
        .then((data) => setInfo((prevState) => data))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  return (
    <table className='result'>
      <thead>
        <tr>
          <th colSpan='4'>{props.mDay}. kolo</th>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => (
          <tr key={res.id}>
            <td className='result-home'>
              {res.home_name}
              <img src={logos.get(res.home_id)} alt='logo' />
            </td>
            <td className='result-score'></td>
            <td className='result-away'>
              <img src={logos.get(res.away_id)} alt='logo' />
              {res.away_name}
            </td>
            <td>
              <button className='button__delete' onClick={() => deleteGame(res.id)}>
                Brisi &#10005;
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
