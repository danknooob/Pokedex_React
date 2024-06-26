import React, { Component } from "react";
import './pokecard.css';
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree=(number)=>(number<=999 ?`00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        
        const imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
            <>
                <div className="Pokecard"> 
                <h1>{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div><h1 className="Pokecard-data">Type:{this.props.type.toUpperCase()
                }</h1></div>
                <div><h1 className="Pokecard-data">EXP:{this.props.exp}</h1></div>

                </div>
               
            </>
        );
    }
}

export default Pokecard;
