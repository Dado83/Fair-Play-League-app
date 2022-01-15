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

export default function Fixture(props) {
  const site = document.location.hostname;
  const url = window.location.href;
  const [fixture, setFixture] = useState([]);
  const logos = new Map();
  logos.set('1', logo1);
  logos.set('2', logo2);
  logos.set('3', logo3);
  logos.set('4', logo4);
  logos.set('5', logo5);
  logos.set('6', logo6);
  logos.set('7', logo7);
  logos.set('8', logo8);

  useEffect(() => {
    fetch(`${protocol}://${site}/api/fixturesPage.php`)
      .then((response) => response.json())
      .then((data) => setFixture((prevState) => data))
      .catch((err) => console.log(err));
  }, [props.mDay]);

  return (
    <>
      <h2>Raspored:</h2>
      <div className='content'>
        {Object.values(fixture).map((f) => (
          <table className='fixture ar-increase'>
            <thead>
              <tr>
                <th colSpan='3'>
                  {props.mDay}. kolo <span>{f[0]?.game_date}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {f.map((fix) => (
                <tr key={fix.id}>
                  <td>
                    {fix.home_club}
                    <img src={logos.get(fix.home_team)} />
                  </td>
                  <td>-</td>
                  <td>
                    <img src={logos.get(fix.away_team)} />
                    {fix.away_club}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}
