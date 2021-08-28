import React, { useEffect } from 'react';


export default function TourMaker(props) {
  const site = document.location.hostname;
  const url = window.location.href;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <h1>tour mejk</h1>
    </div>
  );
}
