import React, { useState, useEffect } from 'react';


export default function Dashboard(props) {
    //const [admin, setAdmin] = useState('');
    /*  useEffect(() => {
         setAdmin(props.admin);
     }, []);
  */
    /*  if (admin) {
         return <div>admin</div>
     } else {
         return <div>not</div>
     } */

    return (
        <p>{sessionStorage.getItem('user')}</p>
    )
}
