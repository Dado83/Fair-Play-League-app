import React, { useState, useEffect } from 'react';
import { protocol, logos } from '../utility/utility';

export default function PanelResult(props) {
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);

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
              <img src={logos.get(String(res.home_id))} alt='logo' />
            </td>
            <td className='result-score'></td>
            <td className='result-away'>
              <img src={logos.get(String(res.away_id))} alt='logo' />
              {res.away_name}
            </td>
            <td>
              <button className='button__delete' onClick={() => deleteGame(res.id)}>
                &#10005;
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
