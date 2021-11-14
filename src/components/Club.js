import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Clubs(props) {
  const [club, setClub] = useState([]);
  const [results, setResults] = useState([]);
  const clubInfo = useLocation();
  const { id } = clubInfo.state;
  const site = document.location.hostname;

  useEffect(() => {
    fetch(`http://${site}/api/teams.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setClub((prevState) => data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    fetch(`http://${site}/api/results.php?clubid=${id}`)
      .then((response) => response.json())
      .then((data) => setResults((prevState) => data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="club-info">
      <img src={`http://${site}/api/logos-big/${id}.png`} />
      <p>{club.team_name}</p>
      <p>{club.team_city}</p>
      <p>{club.kit_color}</p>
      <p>{club.venue}</p>
      <p>{club.game_time}</p>
      <div className="club-results" id={`club${id}`}>
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
          {results.map((res) => (
            <tbody>
              <tr>
                <td>{res.m_day}. kolo</td>
              </tr>
              <tr key={res.id}>
                <td>{res.home_name}</td>

                <td className={props.gen8}>{res.goals_home8}</td>
                <td className={props.gen9}>
                  {res.goals_home9 != -1 ? res.goals_home9 : "*"}
                </td>
                <td className={props.gen10}>{res.goals_home10}</td>
                <td className={props.gen11}>{res.goals_home11}</td>
                <td className={props.gen12}>
                  {res.goals_home12 != -1 ? res.goals_home12 : "*"}
                </td>
              </tr>
              <tr>
                <td>{res.away_name}</td>
                <td className={props.gen8}>{res.goals_away8}</td>
                <td className={props.gen9}>
                  {res.goals_away9 != -1 ? res.goals_away9 : "*"}
                </td>
                <td className={props.gen10}>{res.goals_away10}</td>
                <td className={props.gen11}>{res.goals_away11}</td>
                <td className={props.gen7}>
                  {res.goals_away12 != -1 ? res.goals_away12 : "*"}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
