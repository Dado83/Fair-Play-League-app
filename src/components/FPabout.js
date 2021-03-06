import React from 'react';
import grb from '../assets/logo/grb.png'

export default function FPAbout(props) {

    return (
        <div className='fpabout'>
            <h1>Fair Play Liga Budućih Šampiona</h1>
            <img src={grb} alt='grb' />
            <p>Fair Play Liga je formirana je 2014. god. sa osnovnim ciljem da podstakne najmlađe učesnike sportskih manfestacija – djecu,
                da se kroz igru i zabavu nauče fer-plej ponašanju.
                Osnovna ideja u osnivanju Fair Play lige je bila da se propišu jedinstveni standardi –
                propozicije i pravila koja su potpuno prilagođena djeci.</p>
            <br />
            <p><i><b>OSNOVNI PRINCIPI U ORGANIZACIJI FAIR PLAY LIGE</b></i></p>
            <p> Fair Play Liga se sprovodi na osnovu jedinstvenog sistema takmičenja, koji je potpuno prilagođen djeci,
                zavisno od njihovog uzrasta:</p>
            <p>– ravnopravne takmičarske grupe, svako dijete se može radovati po nekoj pobjedi čak i početnici,
                pa se ne gubi motiv za bavljenjem sportom,</p>
            <p> – 3. poluvrijeme svih utakmica, da bi djeca koja su manje igrala u regularnom toku dobila šansu da pokažu svoje
                umijeće,</p>
            <p>– djevojčice i dječaci u istim timovima, afirmacija ideje da se sport ne dijeli na muški i ženski.</p>
        </div>
    );
}

