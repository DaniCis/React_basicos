import React, { Component } from "react";

const Login = () =>(
    <div>
        <h4>Login</h4>
    </div>
)

const Logout = () =>(
    <div>
        <h4>Logout</h4>
    </div>
)

export default class RenderizadoCondicional extends Component{
    
    constructor(props){
        super(props);
        this.state={
            session:true,
        };
    }
    render(){
        return(
            <div>  
                <h3>Renderizado Condicional</h3>
                {this.state.session ? <Login/> : <Logout/> }
            </div>
        )
    };
}