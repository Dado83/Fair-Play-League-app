import { Link } from 'react-router-dom';

export default function Err404() {

  return (
    <div className='content'>
      <h1>Nema stranice...</h1>
      <Link to='/'>aj nazad kuci</Link>
    </div>
  );
}
