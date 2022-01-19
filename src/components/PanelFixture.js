import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { protocol } from '../utility/utility';

export default function PanelFixture(props) {
  const [fixture, setFixture] = useState([]);

  useEffect(() => {
    fetch(`${protocol}://${props.site}/api/fixtures.php?notPlayed=true`)
      .then((response) => response.json())
      .then((data) => setFixture((prevState) => data))
      .catch((err) => console.log(err));
  }, [props.mDay]);

  /* ubaci css za vizuelnu podjelu kola */
  return (
    <table className='fixture-panel'>
      <thead>
        <tr>
          <th colSpan='5'>Raspored</th>
        </tr>
      </thead>
      <tbody>
        {fixture.map((fix) => (
          <tr key={fix.id}>
            <td>{fix.m_day}</td>
            <td>{fix.home}</td>
            <td>-</td>
            <td>{fix.away}</td>
            <td>
              <button>
                <Link
                  to={{
                    pathname: '/input',
                    state: {
                      mday: fix.m_day,
                      id: fix.id,
                      homeID: fix.home_team,
                      homeTeam: fix.home,
                      awayID: fix.away_team,
                      awayTeam: fix.away,
                    },
                  }}>
                  unesi
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
