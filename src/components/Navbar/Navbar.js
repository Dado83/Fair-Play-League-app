import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/table'>Table</Link></li>
        </ul>
    )
}
