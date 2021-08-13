import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';


export default function GameInput(props) {
    const site = document.location.hostname;
    const game = useLocation();
    const { mday, id, homeID, homeTeam, awayID, awayTeam } = game.state;
    const [gameInput, setGameInput] = useState(false);

    let no7 = ((homeID == 5 || awayID == 5)
        || (homeID == 8 || awayID == 8)
        || (homeID == 9 || awayID == 9)
        || (homeID == 10 || awayID == 10)) ? true : false;

    let no10 = (homeID == 11 || awayID == 11) ? true : false;

    let no11 = (homeID == 4 || awayID == 4) ? true : false;

    let valuesInit = {
        home11: 0, away11: 0,
        home10: 0, away10: 0,
        home9: 0, away9: 0,
        home8: 0, away8: 0,
        home7: 0, away7: 0
    };

    if (no7) {
        valuesInit.home7 = -1;
        valuesInit.away7 = -1;
    }
    if (no10) {
        valuesInit.home10 = -1;
        valuesInit.away10 = -1;
    }
    if (no11) {
        valuesInit.home11 = -1;
        valuesInit.away11 = -1;
    }


    const [values, setValues] = useState(valuesInit);

    const onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const submit = (e) => {
        e.preventDefault();
        let gameData = {
            id: id,
            mday: mday,
            home: homeTeam,
            homeID: homeID,
            away: awayTeam,
            awayID: awayID
        };
        let formDataToSubmit = { ...gameData, ...values };
        console.log(formDataToSubmit);

        const $reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formDataToSubmit)
        };
        fetch(`http://${site}/api/game.php`, $reqOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        console.log('redirect');

        setGameInput(true);
    };

    if (gameInput) {
        return (
            <Redirect to='/admin' />
        )
    }

    return (
        <div class="game-input">
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Unos rezultata {mday}. kola</legend>
                    <table>
                        <tr>
                            <th>
                                godište
                                <input type="hidden" name="mday" value={mday} />
                                <input type="hidden" name="id" value={id} />
                            </th>
                            <th>
                                domaćin
                            </th>
                            <th>
                                gost
                            </th>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                {homeTeam}
                                <input type="hidden" name="homeID" value={homeID} />
                                <input type="hidden" name="home" value={homeTeam} />
                            </td>
                            <td>
                                {awayTeam}
                                <input type="hidden" name="awayID" value={awayID} />
                                <input type="hidden" name="away" value={awayTeam} />
                            </td>
                        </tr>
                        {no11 ?
                            <tr class="game-input__row">
                                <td>
                                    2011
                                </td>
                                <td>
                                    <input type="hidden" name="home11" value="-1" />
                                </td>
                                <td>
                                    <input type="hidden" name="away11" value="-1" />
                                </td>
                            </tr>
                            :
                            <tr class="game-input__row">
                                <td class="game-input__sel">
                                    2011
                                </td>
                                <td>
                                    <input type="number" name="home11" value={values.home11} onChange={(e) => onChange(e)} />
                                </td>
                                <td>
                                    <input type="number" name="away11" value={values.away11} onChange={(e) => onChange(e)} />
                                </td>
                            </tr>
                        }
                        {no10 ?
                            <tr class="game-input__row">
                                <td class="game-input__sel">
                                    2010
                                </td>
                                <td>
                                    <input type="hidden" name="home10" value="-1" />
                                </td>
                                <td>
                                    <input type="hidden" name="away10" value="-1" />
                                </td>
                            </tr>
                            :
                            <tr class="game-input__row">
                                <td class="game-input__sel">
                                    2010
                                </td>
                                <td>
                                    <input type="number" name="home10" value={values.home10} onChange={(e) => onChange(e)} />
                                </td>
                                <td>
                                    <input type="number" name="away10" value={values.away10} onChange={(e) => onChange(e)} />
                                </td>
                            </tr>
                        }
                        <tr class="game-input__row">
                            <td class="game-input__sel">
                                2009
                            </td>
                            <td>
                                <input type="number" name="home9" value={values.home9} onChange={(e) => onChange(e)} />
                            </td>
                            <td>
                                <input type="number" name="away9" value={values.away9} onChange={(e) => onChange(e)} />
                            </td>
                        </tr>
                        <tr class="game-input__row">
                            <td class="game-input__sel">
                                2008
                            </td>
                            <td>
                                <input type="number" name="home8" value={values.home8} onChange={(e) => onChange(e)} />
                            </td>
                            <td>
                                <input type="number" name="away8" value={values.away8} onChange={(e) => onChange(e)} />
                            </td>
                        </tr>
                        {no7 ?
                            <tr class="game-input__row">
                                <td class="game-input__sel">
                                    2007
                                </td>
                                <td>
                                    <input type="hidden" name="home7" value="-1" />
                                </td>
                                <td>
                                    <input type="hidden" name="away7" value="-1" />
                                </td>
                            </tr>
                            :
                            <tr class="game-input__row">
                                <td class="game-input__sel">
                                    2007
                                </td>
                                <td>
                                    <input type="number" name="home7" value={values.home7} onChange={(e) => onChange(e)} />
                                </td>
                                <td>
                                    <input type="number" name="away7" value={values.away7} onChange={(e) => onChange(e)} />
                                </td>
                            </tr>
                        }
                        <tr>
                            <td colspan="3">
                                <input type="submit" value="Snimi u bazu" />
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
    );
}
