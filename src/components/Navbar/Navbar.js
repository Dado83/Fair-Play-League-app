import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
    return (
        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/raspored'>Raspored</Link></li>
            <li><Link to='/rezultati'>Rezultati</Link></li>
            <li><Link to='/klubovi'>Klubovi</Link></li>
            <li><Link to='/o-nama'>O nama</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/napravi-raspored'>Turnir kreator</Link></li>
        </ul>
    );
}
