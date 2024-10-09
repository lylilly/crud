import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from './elementos_form/Button'


export default () => {
    
    const [pessoa, setPessoa] = useState({})
    
    const dados = useLocation()
    const navegacao = useNavigate()
    
    useEffect(() => {
        async function carregaPessoa() {
            const { objPessoa } = dados.state
            setPessoa(objPessoa)
        }
        
        carregaPessoa()
    }, [])
    
    const excluirPessoa = (idPessoa)=>{
        
        if(confirm(`Tem certeza que deseja Excluir a Pessoa ${pessoa.nome}` )){
            const endPoint = `https://localhost:7106/hamburgueria/pessoa/?id=${idPessoa}`

            fetch(endPoint, {
                method: 'DELETE',
            }).then(resposta => {
                if(resposta.ok){
                    console.log('Excluido com sucesso!')
                }
             }).catch((error) => console.log(error))
    
            navegacao('/')
        }
    }

    return (
        <>
            <h2>Olá, {pessoa.nome} </h2>

            <div id="corpo">
                <p> Id: {pessoa.idpessoa} </p>
                <p> Nome: {pessoa.nome} </p>
                <p> Idade: {pessoa.idade} </p>
                <p> Renda: {`R$ ${parseFloat(pessoa.renda).toFixed(2).replace(".", ",")}`} </p>
            </div>

            <div id="btns">
                <Button tipo='button' nome='excluir' descricao='Excluir' classe='btn1' valor={pessoa.idpessoa} setValor={excluirPessoa} />

                <Link to={'/cadastropessoa'} className="lnkBtn01" state={{dadosPessoa: pessoa}}>Alterar</Link>


            </div>



        </>
    )
}