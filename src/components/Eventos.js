import React, { Component } from 'react'

export class EventosES6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador:0,
        };
        this.sumar = this.sumar.bind(this)//unir los this.
        this.restar = this.restar.bind(this)
    }
    sumar(){
        this.setState({
            contador:this.state.contador+1,
        })
    }
    restar(){
        this.setState({
            contador:this.state.contador-1,
        })
    }
  render() {
    return (
        <div>
            <h2>Eventos en Componentes de Clase ES6</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
    )
  }
}

//Properties Initializer
export class EventosES7 extends Component {
   state = {
        contador:0,
    };
    sumar = () =>{
        this.setState({
            contador:this.state.contador+1,
        })
    }
    restar = () =>{
        this.setState({
            contador:this.state.contador-1,
        })
    }
  render() {
    return (
        <div>
            <h2>Eventos en Componentes de Clase ES7</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
    )
  }
}
 //const Boton = (props) => <button onClick={props.myOnClick}>Botón hecho componente</button>
 const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) =>{
        console.log(e)//envuelve al evento nativo para dar soporte, mejor control
        console.log(e.nativeEvent)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Más Sobre Eventos</h2>
                <button onClick={ (e) => this.handleClick(e,'Hola, paso parametro')}>Saludar</button>
                {/** Evento personalizado */}
                <Boton myOnClick={(e) => this.handleClick(e,'Hola, paso parametro') }/>
            </div>
        )
    }
}