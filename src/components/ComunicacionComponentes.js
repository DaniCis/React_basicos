import React, { Component } from 'react'

export default class Padre extends Component {
  state ={
    contador:0,
  }
  incrementarContador = (e) =>{
    this.setState(
      {contador:this.state.contador +1}
    )
  }
  render() {
    return (
      <div>
        <h3>Comunicacion entre Componentes</h3>
        <p>Contador <b>{this.state.contador}</b></p>
        <Hijo incrementarContador={this.incrementarContador} message ='Mensaje para el componente hijo' />
    </div>
    )
  }
}

function Hijo (props){
  return (
    <>
    <h4>{props.message}</h4>
    <button onClick={props.incrementarContador}>+</button>
    </>
  )
}