import React from "react";
import { Link } from 'react-router-dom'
export default function cardList({pokemonInfo}) {
  return(
    <div className="container-pokemons-list">
    {
        pokemonInfo.map(pokemon =>{
            const img = pokemon.sprites.other.dream_world.front_default;
           return (
            
            <div key={pokemon.id} className="list-container" id={`${pokemon.name}`}>
                <Link to={`/pokemon/${pokemon.id}`} className="card-list">
                <div className="img-card-list" style={ {backgroundImage: `url(${img})`}}></div>
                <div className="container-text-list">
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
