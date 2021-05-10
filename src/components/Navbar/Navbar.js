import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo/grb.png';
import { useEffect } from 'react';

export default function Navbar() {

    useEffect(() => {
        let menuShown = false;
        let bar1 = document.getElementsByClassName('bar1')[0];
        let bar2 = document.getElementsByClassName('bar2')[0];
        let bar3 = document.getElementsByClassName('bar3')[0];
        let menu = document.getElementById('menu-list');
        let menuBar = document.getElementById('menu-toggle');
        const logo = document.getElementsByClassName('header-logo')[0];

        const showMenu = () => {
            menu.classList.remove('navbar-hidden');
            menu.classList.add('navbar-shown');
            bar1.classList.add('bar1-pressed');
            bar2.classList.add('bar2-pressed');
            bar3.classList.add('bar3-pressed');
            menuShown = true;
        }

        const hideMenu = () => {
            menu.classList.remove('navbar-shown');
            menu.classList.add('navbar-hidden');
            bar1.classList.remove('bar1-pressed');
            bar2.classList.remove('bar2-pressed');
            bar3.classList.remove('bar3-pressed');
            menuShown = false;
        }

        const menuToggle = (e) => {
            if (!menuShown && e.target.id !== 'logo') {
                showMenu();
            } else {
                hideMenu();
            }
        }

        menuBar.addEventListener('click', menuToggle);
        menu.addEventListener('click', menuToggle);
        logo.addEventListener('click', menuToggle);

        return () => {
            menuBar.removeEventListener('click', menuToggle);
            menu.removeEventListener('click', menuToggle);
            logo.removeEventListener('click', menuToggle);
        }
    }, [])

    return (
        <header className="header">
            <Link className='header-logo' to='/'><img id='logo' src={logo} /></Link>
            <h3>Liga Budućih Šampiona</h3>
            <nav className='menu'>
                <div id="menu-toggle">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className='navbar navbar-hidden' id='menu-list'>
                    <li ><Link to='/raspored'>Raspored</Link></li>
                    <li ><Link to='/rezultati'>Rezultati</Link></li>
                    <li ><Link to='/klubovi'>Klubovi</Link></li>
                    <li ><Link to='/o-nama'>O nama</Link></li>
                    <li ><Link to='/admin'>Admin</Link></li>
                    <li ><Link to='/napravi-raspored'>Turnir</Link></li>
                </ul>
            </nav>
        </header>
    );
}
