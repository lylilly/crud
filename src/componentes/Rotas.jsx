import React from "react"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Pagina from "./layout/Pagina"
import Lista from "./Lista"
import Home from "./Home"
import Erro from "./Erro"

export default props => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Pagina/>}>
                        <Route>
                            <Route index element={<Home/>}/>
                            <Route path='/lista' element={<Lista/>}/>
                            <Route path='*' element={<Erro/>}/>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}