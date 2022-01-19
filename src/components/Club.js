import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ClubNav from '../App/ClubNav';
import logo1 from '../assets/club-big/1.png';
import logo2 from '../assets/club-big/2.png';
import logo3 from '../assets/club-big/3.png';
import logo4 from '../assets/club-big/4.png';
import logo5 from '../assets/club-big/5.png';
import logo6 from '../assets/club-big/6.png';
import logo7 from '../assets/club-big/7.png';
import logo8 from '../assets/club-big/8.png';
import { protocol } from '../utility/utility';

export default function Club(props) {
  const site = document.location.hostname;
  const [club, setClub] = useState([]);
  const [results, setResults] = useState([]);
  const clubInfo = useLocation();
  const logos = new Map();
  logos.set(1, logo1);
  logos.set(2, logo2);
  logos.set(3, logo3);
  logos.set(4, logo4);
  logos.set(5, logo5);
  logos.set(6, logo6);
  logos.set(7, logo7);
  logos.set(8, logo8);
  let id;

  if (typeof clubInfo.state != 'undefined') {
    id = clubInfo.state.id;
  } else {
    id = 1;
  }

  useEffect(() => {
    fetch(`${protocol}://${site}/api/teams.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setClub((prevState) => data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    fetch(`${protocol}://${site}/api/results.php?clubid=${id}`)
      .then((response) => response.json())
      .then((data) => setResults((prevState) => data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ClubNav />
      <div className='club-info'>
        <img src={logos.get(id)} alt='logo' />
        <h1>{club.team_name}</h1>
        <h3>{club.team_city}</h3>
        <p>{club.kit_color}</p>
        <h4>{club.venue}</h4>
        <p>{club.game_time}</p>
        <div className='club-results' id={`club${id}`}>
          <p>Rezultati:</p>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>2008</td>
                <td>2009</td>
                <td>2010</td>
                <td>2011</td>
                <td>2012</td>
              </tr>
            </thead>
            {results.map((res, index) => (
              <tbody key={index}>
                <tr>
                  <td>{res.m_day}. kolo</td>
                </tr>
                <tr>
                  <td>{res.home_name}</td>
                  <td className={props.gen8}>{res.goals_home8}</td>
                  <td className={props.gen9}>{res.goals_home9 !== -1 ? res.goals_home9 : '*'}</td>
                  <td className={props.gen10}>{res.goals_home10}</td>
                  <td className={props.gen11}>{res.goals_home11}</td>
                  <td className={props.gen12}>{res.goals_home12 !== -1 ? res.goals_home12 : '*'}</td>
                </tr>
                <tr>
                  <td>{res.away_name}</td>
                  <td className={props.gen8}>{res.goals_away8}</td>
                  <td className={props.gen9}>{res.goals_away9 !== -1 ? res.goals_away9 : '*'}</td>
                  <td className={props.gen10}>{res.goals_away10}</td>
                  <td className={props.gen11}>{res.goals_away11}</td>
                  <td className={props.gen7}>{res.goals_away12 !== -1 ? res.goals_away12 : '*'}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
