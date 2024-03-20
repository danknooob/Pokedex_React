import React, { Component } from "react";
import Pokecard from "./pokecard";
import './pokedex.css'
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokedex extends Component {
    render(){
        let title;
        if(this.props.isWinner)
        {
            title=<h1 className="Pokedex-Winner">Winning Hand</h1>
        }
        else
        {
            title=<h1 className="Pokedex-Loser">Losing Hand</h1>

        }
        return<>
       
        <div className="Pokedex"> 
        {title}
            <h1>Pokedex</h1>
            <p>Total Experience of The Hand : {this.props.exp}</p>
            
            <div className="Pokedex-card">
                {this.props.pokemon.map((p)=>(
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            ))}
            </div>
           
        </div>
        </>
    }
}

export default Pokedex;