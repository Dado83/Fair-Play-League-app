import Club from "../components/Club";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clubs() {
  const site = document.location.hostname;

  /*const url = window.location.href;
   useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);
 
  let clubs = [];
  for (let i = 1; i <= 8; i++) {
    clubs[i] = <Club key={i} id={i} site={site} />;
  } */

  return (
    <>
      <Link to={{ pathname: "/klub", state: { id: 1 } }}>Klub 1</Link>
      <Link to={{ pathname: "/klub", state: { id: 2 } }}>Klub 2</Link>
    </>
  );
}
