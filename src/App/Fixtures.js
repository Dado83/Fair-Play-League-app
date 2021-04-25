import React, { useState, useEffect } from 'react'
import Fixture from '../components/Fixture/Fixture'

export default function Fixtures(props) {
  let fixtures = [];
  for (let i = 1; i <= 11; i++) {
    fixtures[i] = <Fixture key={i} mDay={i} />;
  }

  return (
    <>
      <h1>fixtures</h1>
      <hr />
      {fixtures.map(e =>
        e)}
    </>
  )
}
