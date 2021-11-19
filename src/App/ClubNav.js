import Club from "../components/Club";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Clubs() {
  const site = document.location.hostname;
  const clubs = new Map();
  clubs.set(1, "ŠS Internacional");
  clubs.set(2, "ŠF Lavovi");
  clubs.set(3, "NK Don Bosco");
  clubs.set(4, "Euro Football");
  clubs.set(5, "ŠN Novi Šeher");
  clubs.set(6, "ŠN Perfect");
  clubs.set(7, "NK Zvijezda");
  clubs.set(8, "FK Proleter");

  return (
    <>
      <Link to={{ pathname: "/klub", state: { id: 1 } }}>{clubs.get(1)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 2 } }}>{clubs.get(2)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 3 } }}>{clubs.get(3)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 4 } }}>{clubs.get(4)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 5 } }}>{clubs.get(5)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 6 } }}>{clubs.get(6)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 7 } }}>{clubs.get(7)}</Link>
      <Link to={{ pathname: "/klub", state: { id: 8 } }}>{clubs.get(8)}</Link>
    </>
  );
}
