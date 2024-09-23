import './Conteudo.css'

import React from 'react'
import { Outlet } from 'react-router-dom'

export default props => {
    return (
        <section className='Conteudo'>
            <Outlet>
                {props.children}
            </Outlet>
        </section>
    )
}