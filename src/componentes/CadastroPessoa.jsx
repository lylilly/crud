import './elementos_form/Formulario.css'

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

import Input from "./elementos_form/Input";
import Button from "./elementos_form/Button"

export default () => {
    const [idPessoa, setIdPessoa] = useState(0)
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [renda, setRenda] = useState(0.0)
    const [etiqueta, setEtiqueta] = useState('')

    const dados = useLocation()
    const navegacao = useNavigate()


    if (dados.state !== null) {
        useEffect(() => {
            const carregaForm = (obj) => {
                setIdPessoa(obj.idpessoa)
                setNome(obj.nome)
                setIdade(obj.idade)
                setRenda(obj.renda)
            }

            async function carregaPessoa() {
                const { dadosPessoa } = dados.state
                carregaForm(dadosPessoa)
            }

            carregaPessoa()

            setEtiqueta('Alterar Pessoa')
        }, [])

    }

    const cadastrarDados = (e) => {
        e.preventDefault()

        const endPoint = 'https://localhost:7106/hamburgueria/pessoa'

        fetch(endPoint, {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                idade: idade,
                renda: renda,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resposta) => resposta.json())
            .then((info) => console.log(info))
            .catch((error) => console.log(error))

        navegacao('/listapessoas')
    }

    const alterarDados = (e) => {
        const endPoint = 'https://localhost:7106/hamburgueria/pessoa'

        fetch(endPoint, {
            method: 'PUT',
            body: JSON.stringify({
                idpessoa: idPessoa,
                nome: nome,
                idade: idade,
                renda: renda,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resposta) => resposta.json())
            .then((info) => console.log(info))
            .catch((error) => console.log(error))

        navegacao('/listapessoas')
    }

    return (
        <>

            <div className="form">
                <h2>{etiqueta !== '' ? etiqueta : 'Cadastro Pessoa'} </h2>

                <form onSubmit={cadastrarDados}>
                    <Input tipo='text' nome='nome' classe='Input'
                        etiqueta='Informe o nome' valor={nome} setValor={setNome} />

                    <Input tipo='text' nome='idade' classe='Input' etiqueta='Informe a idade' valor={idade} setValor={setIdade} />

                    <Input tipo='text' nome='renda' classe='Input' etiqueta='Informe a renda' valor={renda} setValor={setRenda} />


                    {etiqueta !== '' ?
                         <Button tipo='button' nome='alterar' descricao='Alterar' classe='btn1' setValor={alterarDados}  />
                        :
                        <button> Cadastrar </button>
                    }
                </form>
            </div>

        </>
    )
}