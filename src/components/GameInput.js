import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function GameInput(props) {
    const game = useLocation();
    const { mday, id, homeID, homeTeam, awayID, awayTeam } = game.state;
    useEffect(() => {
        fetch()
            .then()
            .then()
            .catch(err => console.log(err));
    }, []);


    return (
        <div class="game-input">
            <form>
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
                                    <input type="number" name="home11" value="0" />
                                </td>
                                <td>
                                    <input type="number" name="away11" value="0" />
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
                                    <input type="number" name="home10" value="0" />
                                </td>
                                <td>
                                    <input type="number" name="away10" value="0" />
                                </td>
                            </tr>
                        }
                        <tr class="game-input__row">
                            <td class="game-input__sel">
                                2009
                            </td>
                            <td>
                                <input type="number" name="home9" value="0" />
                            </td>
                            <td>
                                <input type="number" name="away9" value="0" />
                            </td>
                        </tr>
                        <tr class="game-input__row">
                            <td class="game-input__sel">
                                2008
                            </td>
                            <td>
                                <input type="number" name="home8" value="0" />
                            </td>
                            <td>
                                <input type="number" name="away8" value="0" />
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
                                    <input type="number" name="home7" value="0" />
                                </td>
                                <td>
                                    <input type="number" name="away7" value="0" />
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
