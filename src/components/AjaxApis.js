import React, { Component } from 'react'

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {
    state={
        pokemons:[]
    }

    componentDidMount(){
        let url ='https://pokeapi.co/api/v2/pokemon/'
        fetch(url)
            .then(res => res.json())
            .then(json =>{
                let pokemons = [];
                json.results.forEach( x =>{
                    fetch(x.url)
                        .then(res => res.json())
                        .then(json =>{
                            console.log(json)
                            let pokemon  ={
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }
                            pokemons = [...pokemons, pokemon]
                            this.setState({pokemons})

                        })
                })
            })
    }

  render() {
    return (
      <div>
        <h2>Peticiones Asincronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 
            ? (
                <h4>Cargando...</h4> 
            )
            : (
                this.state.pokemons.map( x => <Pokemon key={x.id} avatar={x.avatar} name={x.name}/>)
            )
        }
      </div>
    )
  }
}
