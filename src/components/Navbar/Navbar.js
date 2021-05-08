import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo/grb.png';

export default function Navbar() {
    return (
        <header className="header">
            <Link className='header-logo' to='/'><img src={logo} /></Link>
            <h3>Liga Budućih Šampiona</h3>
            <nav className='menu'>
                <div className="menu-container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className='navbar'>
                    <li><Link to='/raspored'>Raspored</Link></li>
                    <li><Link to='/rezultati'>Rezultati</Link></li>
                    <li><Link to='/klubovi'>Klubovi</Link></li>
                    <li><Link to='/o-nama'>O nama</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/napravi-raspored'>Turnir</Link></li>
                </ul>
            </nav>
        </header>
    );
}
