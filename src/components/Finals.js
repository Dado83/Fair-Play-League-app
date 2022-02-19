import React, { useState, useEffect } from 'react';

export default function Finals(props) {
  return (
    <>
      <div className='finals'>
        Završni turnir Lige je na rasporedu 26. i 27. februara 2022.
        <div>{props.team1}</div>
        <div>{props.team2}</div>
        <div>{props.team3}</div>
        <div>{props.team4}</div>
      </div>
    </>
  );
}
