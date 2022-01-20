import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { protocol } from '../utility/utility';

export default function GameInput(props) {
  const site = document.location.hostname;
  const game = useLocation();
  const { mday, id, homeID, homeTeam, awayID, awayTeam } = game.state;

  let no9 = homeID == 1 || awayID == 1 ? true : false;

  let no12 = homeID == 2 || awayID == 2 || homeID == 5 || awayID == 5 || homeID == 6 || awayID == 6 ? true : false;

  let valuesInit = {
    home12: 0,
    away12: 0,
    home11: 0,
    away11: 0,
    home10: 0,
    away10: 0,
    home9: 0,
    away9: 0,
    home8: 0,
    away8: 0,
  };

  if (no9) {
    valuesInit.home9 = -1;
    valuesInit.away9 = -1;
  }
  if (no12) {
    valuesInit.home12 = -1;
    valuesInit.away12 = -1;
  }

  const [values, setValues] = useState(valuesInit);

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    let gameData = {
      id: id,
      mday: mday,
      home: homeTeam,
      homeID: homeID,
      away: awayTeam,
      awayID: awayID,
    };
    let formDataToSubmit = { ...gameData, ...values };
    console.log(formDataToSubmit);

    const $reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formDataToSubmit),
    };
    fetch(`${protocol}://${site}/api/game.php`, $reqOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    window.location.replace('/admin');
  };

  useEffect(() => {
    const firstInput = document.getElementsByName('home12')[0];
    const secInput = document.getElementsByName('home11')[0];
    if (!firstInput.disabled) {
      firstInput.focus();
      firstInput.select();
    } else {
      secInput.focus();
      secInput.select();
    }
  }, []);

  return (
    <div class='game-input'>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Unos rezultata {mday}. kola</legend>
          <table>
            <tr>
              <th>
                <input type='hidden' name='mday' value={mday} />
                <input type='hidden' name='id' value={id} />
              </th>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>{homeTeam}</b>
                <input type='hidden' name='homeID' value={homeID} />
                <input type='hidden' name='home' value={homeTeam} />
              </td>
              <td>-</td>
              <td>
                <b>{awayTeam}</b>
                <input type='hidden' name='awayID' value={awayID} />
                <input type='hidden' name='away' value={awayTeam} />
              </td>
            </tr>
            {no12 ? (
              <tr class='game-input__row'>
                <td class='game-input__sel'>
                  <b>2012</b>
                </td>
                <td colSpan='2'>
                  <input type='number' name='home12' value='-1' min='0' max='99' disabled />
                </td>
                <td>
                  <input type='number' name='away12' value='-1' min='0' max='99' disabled />
                </td>
              </tr>
            ) : (
              <tr class='game-input__row'>
                <td class='game-input__sel'>
                  <b>2012</b>
                </td>
                <td colSpan='2'>
                  <input
                    type='number'
                    name='home12'
                    min='0'
                    max='99'
                    value={values.home12}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type='number'
                    name='away12'
                    min='0'
                    max='99'
                    value={values.away12}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </td>
              </tr>
            )}
            <tr class='game-input__row'>
              <td class='game-input__sel'>
                <b>2011</b>
              </td>
              <td colSpan='2'>
                <input
                  type='number'
                  name='home11'
                  min='0'
                  max='99'
                  value={values.home11}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
              <td>
                <input
                  type='number'
                  name='away11'
                  min='0'
                  max='99'
                  value={values.away11}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
            </tr>
            <tr class='game-input__row'>
              <td class='game-input__sel'>
                <b>2010</b>
              </td>
              <td colSpan='2'>
                <input
                  type='number'
                  name='home10'
                  min='0'
                  max='99'
                  value={values.home10}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
              <td>
                <input
                  type='number'
                  name='away10'
                  min='0'
                  max='99'
                  value={values.away10}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
            </tr>
            {no9 ? (
              <tr class='game-input__row'>
                <td class='game-input__sel'>
                  <b>2009</b>
                </td>
                <td colSpan='2'>
                  <input type='number' name='home9' value='-1' min='0' max='99' disabled />
                </td>
                <td>
                  <input type='number' name='away9' value='-1' min='0' max='99' disabled />
                </td>
              </tr>
            ) : (
              <tr class='game-input__row'>
                <td class='game-input__sel'>
                  <b>2009</b>
                </td>
                <td colSpan='2'>
                  <input
                    type='number'
                    name='home9'
                    min='0'
                    max='99'
                    value={values.home9}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type='number'
                    name='away9'
                    min='0'
                    max='99'
                    value={values.away9}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </td>
              </tr>
            )}
            <tr class='game-input__row'>
              <td class='game-input__sel'>
                <b>2008</b>
              </td>
              <td colSpan='2'>
                <input
                  type='number'
                  name='home8'
                  min='0'
                  max='99'
                  value={values.home8}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
              <td>
                <input
                  type='number'
                  name='away8'
                  min='0'
                  max='99'
                  value={values.away8}
                  onChange={(e) => onChange(e)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colspan='3'>
                <input type='submit' value='Snimi u bazu' />
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
}
