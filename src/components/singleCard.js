import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'


export const SingleCard = () => {
    // agafem el id per parametes
    const pokemonParam = useParams();
    const pokemonID = pokemonParam.id;
    // concatenem url + id
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    const [pokemon, setPokemon ] = useState([])
    
    useEffect(() => {
    // consumim la url de la api per tenir el pokemon
     axios.get(url).then(res =>{
        // guardem la data
        setPokemon(res.data)
     })
    }, [pokemon])
    

  return (
    <div>{pokemon.name}</div>
  )
}
