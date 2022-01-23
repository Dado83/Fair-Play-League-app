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
    <div className='result ar-increase'>
      <div className='res-head'>
        <span>{props.mDay}. kolo</span>
        <span className={props.gen8}></span>
        <span className={props.gen9}></span>
        <span className={props.gen10}></span>
        <span className={props.gen11}></span>
        <span className={props.gen12}></span>
      </div>
      {result.map((res) => (
        <div className='res-row' key={res.id}>
          <span className='res-home'>
            <span className='team-name'> {res.home_name}</span>
            <img src={logos.get(res.home_id)} alt='logo' />
          </span>
          <span className={props.gen8}>{res.goals_home8}</span>
          <span className={props.gen8}>-</span>
          <span className={props.gen8}>{res.goals_away8}</span>
          <span className={props.gen9}>{res.goals_home9 !== -1 ? res.goals_home9 : '*'}</span>
          <span className={props.gen9}>-</span>
          <span className={props.gen9}>{res.goals_away9 !== -1 ? res.goals_away9 : '*'}</span>
          <span className={props.gen10}>{res.goals_home10}</span>
          <span className={props.gen10}>-</span>
          <span className={props.gen10}>{res.goals_away10}</span>
          <span className={props.gen11}>{res.goals_home11}</span>
          <span className={props.gen11}>-</span>
          <span className={props.gen11}>{res.goals_away11}</span>
          <span className={props.gen12}>{res.goals_home12 !== -1 ? res.goals_home12 : '*'}</span>
          <span className={props.gen12}>-</span>
          <span className={props.gen12}>{res.goals_away12 !== -1 ? res.goals_away12 : '*'}</span>
          <span className='res-away'>
            <img src={logos.get(res.away_id)} alt='logo' />
            <span className='team-name'>{res.away_name}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
