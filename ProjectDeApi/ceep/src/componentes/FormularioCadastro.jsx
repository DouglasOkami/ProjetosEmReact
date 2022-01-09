import React, { Component } from "react";

export class FormularioCadastro extends Component{
    render(){
        return(
            <form>
            <input type="text" value="Titulo" />
            <textarea placeholder="Escreva sua nota..." />
            <button> Criar nota</button>
          </form>
        )
    }
}

export default FormularioCadastro;