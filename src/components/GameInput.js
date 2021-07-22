import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function GameInput(props) {
    const game = useLocation();
    const { mday, id, homeID, homeTeam, awayID, awayTeam } = game.state;
    /* useEffect(() => {
        fetch()
            .then()
            .then()
            .catch(err => console.log(err));
    }, []); */

    const [values, setValues] = useState({
        home11: 0, away11: 0,
        home10: 0, away10: 0,
        home9: 0, away9: 0,
        home8: 0, away8: 0,
        home7: 0, away7: 0
    });
    //da li ubaciti i ovdje provjeru da li godiste nastupa???

    const onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(values);
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
                        {(homeID == 4 || awayID == 4) ?
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

                        {(homeID == 11 || awayID == 11) ?
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
                        {((homeID == 5 || awayID == 5)
                            || (homeID == 8 || awayID == 8)
                            || (homeID == 9 || awayID == 9)
                            || (homeID == 10 || awayID == 10)) ?
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
