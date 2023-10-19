import React from "react";
import { Link } from 'react-router-dom'

export default function CardColumn({pokemonInfo}) {
  return(
    <div className="container-pokemons">
        {
            pokemonInfo.map(pokemon =>{
                const img = pokemon.sprites.other.dream_world.front_default;
               return (
                
                <div key={pokemon.id} className="card">
                    <Link to={`/pokemon/${pokemon.id}`}>
                    <div className="img-card" style={ {backgroundImage: `url(${img})`}}></div>
                    <div className="container-text">
                    <p>{pokemon.name}</p> 
                    </div>
                    </Link>
                </div>
               
               )
            })
        }
    </div>
  )
}
