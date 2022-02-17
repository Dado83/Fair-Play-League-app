import React, { useState, useEffect } from 'react';

export default function Finals(props) {
  return (
    <>
      <div className='finals'>Završni turnir Lige je na rasporedu 26. i 27. februara 2022.</div>
      <p>1.{props.team1}</p>
      <p>2.{props.team2}</p>
      <p>3.{props.team3}</p>
      <p>4.{props.team4}</p>
    </>
  );
}
