import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/raspored'>Raspored</Link></li>
            <li><Link to='/rezultati'>Rezultati</Link></li>
            <li><Link to='/klubovi'>Klubovi</Link></li>
            <li><Link to='/o-nama'>O nama</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/napravi-raspored'>Turnir kreator</Link></li>
        </ul>
    )
}
