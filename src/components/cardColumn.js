import React from "react";
import {  Link} from 'react-router-dom'

export default function CardColumn({pokemonInfo}) {
  return(
    <div>
        {
            pokemonInfo.map(pokemon =>{
               return (
                <Link to={`/pokemon/${pokemon.id}`}>
               <div key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.other.dream_world.front_default} />
               </div>
               </Link>

               )
            })
        }
    </div>
  )
}
