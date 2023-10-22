import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, Link ,useNavigate} from 'react-router-dom';
// npm + importem fontawesome + icones 


export const SingleCard = () => {

    const navigate = useNavigate();
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
        const data = res.data.sprites
        console.log(res.data.sprites.other.dream_world.front_default)
        // console.log(res.data.sprites)
     })
    }, [])
    
  return (
    <>
    
    <div className='container-single'>
  
                    <div key={pokemon.id} className="card-single">
                    <Link to={`/pokemon/${pokemon.id}`}>
                    <div className="img-card-single" style={ {backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg)`}}></div>
                    <div className="container-text">
                    <p>{pokemon.name}</p> 
                    </div>
                    </Link>
                </div>
                <div className='nav-back'>
    <button onClick={() => navigate(-1)}>Back</button>
    </div> 
             
    </div>
    </>
  )
}
