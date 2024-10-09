import React from "react";

import './Button.css'

export default (props) => {

    return (
        <>
            <button
                type={props.tipo}
                name={props.nome}
                id={props.nome}
                className={props.classe}
                value={props.valor}
                onClick={(e) => props.setValor(e.target.value)}
            >
                {props.descricao}
            </button>
        </>
    )

}