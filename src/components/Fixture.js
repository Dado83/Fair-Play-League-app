import React, { useState, useEffect } from 'react';
import { protocol, logos } from '../utility/utility';

export default function Fixture(props) {
  const [fixture, setFixture] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch(`${protocol}://${props.site}/api/fixtures.php?mday=${props.mDay}`)
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setFixture((prevState) => data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, [props.mDay]);

  return (
    <div className='fixture ar-increase'>
      <div className='fix-head'>
        <span>
          {props.mDay}. kolo <span>{fixture[0]?.game_date}</span>
        </span>
      </div>
      {fixture.map((fix) => (
        <div className='fix-row' key={fix.id}>
          <span className='fix-home'>
            <span className='team-name'>{fix.home_club}</span>
            <img src={logos.get(fix.home_team)} alt='logo' />
          </span>
          <span className='fix-v'>-</span>
          <span className='fix-away'>
            <img src={logos.get(fix.away_team)} alt='logo' />
            <span className='team-name'>{fix.away_club}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
