import './Cabecalho.css'

import { Link } from 'react-router-dom'
import React from "react"

export default () => {
    return (
        <header className="Cabecalho">
            <nav className="menu">
                <ul>
                    <li> <Link to={'/'}> Home </Link> </li>
                    <li> <Link to={'/lista'}> Lista </Link> </li>
                    <li> Menu 02 </li>
                    <li> Menu 03 </li>
                </ul>
            </nav>
        </header>
    )
}