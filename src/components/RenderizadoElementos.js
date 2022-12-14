import React, { Component } from "react";
import data from '../helpers/data.json';

const ElementoLista = ({name,web}) =>{
    return(
        <li>
            <a href={web} target="_blank" rel="noreferrer" >{name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {

    constructor(props){
        super(props)
        this.state ={
            seasons:['Primavera','Verano','Invierno','Otoño']
        }
    }

    render(){
        return(
            <div>
                <h3>Renderizado de Elementos</h3>
                <h4>Estaciones del año</h4>
                <ol>
                    {this.state.seasons.map( (x,index) => <li key={index}>{x}</li>) }
                </ol>
                <h4>Frameworks Frontend JS</h4>
                <ul>
                    {data.frameworks.map( x => <ElementoLista key={x.id} {...x}/> )}
                </ul>
            </div>
        )
    }

}