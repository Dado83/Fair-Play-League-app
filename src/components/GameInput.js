import React, { useState, useEffect } from 'react';

export default function GameInput(props) {

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
                    <legend>Unos rezultata {props.mday}. kola</legend>
                    <table>
                        <tr>
                            <th>
                                godište
                                <input type="hidden" name="mday" value={props.mday} />
                                <input type="hidden" name="id" value={props.id} />
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
                                {props.home}
                                <input type="hidden" name="homeID" value={props.home_team} />
                                <input type="hidden" name="home" value={props.home} />
                            </td>
                            <td>
                                {props.away}
                                <input type="hidden" name="awayID" value={props.away_team} />
                                <input type="hidden" name="away" value={props.away} />
                            </td>
                        </tr>
                        {(props.home_team == 4 || props.away_team == 4) ?
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

                        {(props.home_team == 11 || props.away_team == 11) ?
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
                        {((props.home_team == 5 || props.away_team == 5)
                            || (props.home_team == 8 || props.away_team == 8)
                            || (props.home_team == 9 || props.away_team == 9)
                            || (props.home_team == 10 || props.away_team == 10)) ?
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
