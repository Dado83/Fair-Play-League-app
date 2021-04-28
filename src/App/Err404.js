import { Link } from 'react-router-dom';

export default function Err404() {

  return (
    <>
      <h1>Nema stranice...</h1>
      <Link to='/'>aj nazad kuci</Link>
    </>
  );
}
