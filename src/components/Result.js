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

export default function Result(props) {
  const [result, setResult] = useState([]);
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

  return (
    <table className='result ar-increase'>
      <thead>
        <tr>
          <th>{props.mDay}. kolo</th>
          <th colSpan='3' className={props.gen8}></th>
          <th colSpan='3' className={props.gen9}></th>
          <th colSpan='3' className={props.gen10}></th>
          <th colSpan='3' className={props.gen11}></th>
          <th colSpan='3' className={props.gen12}></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => (
          <tr key={res.id}>
            <td className='result-home'>
              {res.home_name}
              <img src={logos.get(res.home_id)} alt='logo' />
            </td>
            <td className={props.gen8}>{res.goals_home8}</td>
            <td className={props.gen8}>-</td>
            <td className={props.gen8}>{res.goals_away8}</td>
            <td className={props.gen9}>{res.goals_home9 !== -1 ? res.goals_home9 : '*'}</td>
            <td className={props.gen9}>-</td>
            <td className={props.gen9}>{res.goals_away9 !== -1 ? res.goals_away9 : '*'}</td>
            <td className={props.gen10}>{res.goals_home10}</td>
            <td className={props.gen10}>-</td>
            <td className={props.gen10}>{res.goals_away10}</td>
            <td className={props.gen11}>{res.goals_home11}</td>
            <td className={props.gen11}>-</td>
            <td className={props.gen11}>{res.goals_away11}</td>
            <td className={props.gen12}>{res.goals_home12 !== -1 ? res.goals_home12 : '*'}</td>
            <td className={props.gen12}>-</td>
            <td className={props.gen12}>{res.goals_away12 !== -1 ? res.goals_away12 : '*'}</td>
            <td className='result-away'>
              <img src={logos.get(res.away_id)} alt='logo' />
              {res.away_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
