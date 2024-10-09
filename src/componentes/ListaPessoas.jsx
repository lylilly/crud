import './Lista.css'

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import DetalhePessoa from './DetalhePessoa'

export default () => {

    const endPoint = 'https://localhost:7106/hamburgueria/pessoa'

    const [lista, setLista] = useState([])

    useEffect(() => {
        async function carregaPessoas() {
            const resposta = await fetch(endPoint)
            const dados = await resposta.json()
            setLista(dados)
        }

        carregaPessoas()
    }, [])

    const exibeDados = (objPessoa)=>{
        <DetalhePessoa dados={objPessoa}/>
    }

    return (
        <>
            <h2>Lista Pessoas </h2>

            <div className="lista">

                {
                    lista.map((elem, i) => (

                        <div className='item' key={i}>
                            <div className='itemDescricao'>
                                <span> {i + 1} </span>
                                <span> {elem.nome} </span>
                                <span> {elem.idade} </span>
                                <span> R$ {parseFloat(elem.renda).toFixed(2).replace('.', ',')}</span>
                                
                                <span><Link to={'/detalhepessoa'} className='lnkLista' state={{objPessoa: elem}} > D </Link> </span>
                            </div>
                        </div>

                    ))
                }

            </div>

        </>
    )
}