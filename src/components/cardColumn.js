import React from "react";

export default function CardColumn({pokemonInfo}) {
  return(
    <div>
        {
            pokemonInfo.map(pokemon =>{
               return (
               <div key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.other.dream_world.front_default} />
               </div>

               )
            })
        }
    </div>
  )
}
