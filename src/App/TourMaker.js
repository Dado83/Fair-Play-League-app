import React, { useEffect } from 'react';


export default function TourMaker(props) {
  const url = window.location.href;
  useEffect(() => {
    fetch(`http://localhost/api/visitors.php?counter=${url}`);
  }, []);

  return (
    <div className='content'>
      <h1>tour mejk</h1>
    </div>
  );
}
