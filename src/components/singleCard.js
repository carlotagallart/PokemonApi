import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, Link ,useNavigate} from 'react-router-dom';
// npm + importem fontawesome + icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const SingleCard = () => {
    const navigate = useNavigate();

    // agafem el id per parametes
    const pokemonParam = useParams();
    const pokemonID = pokemonParam.id;
    // concatenem url + id
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    const [pokemon, setPokemon ] = useState([])
    const [img, setImage] = useState([])
    useEffect(() => {
    // consumim la url de la api per tenir el pokemon
     axios.get(url).then(res =>{
        // guardem la data
        setPokemon(res.data)
        const data = res.data.sprites
        // data.map((item) =>{
        //     console.log(item)
        // })
        console.log(res.data.sprites.other.dream_world.front_default)
        // console.log(res.data.sprites)
     })
    }, [])
  

  return (
    <>
    
    <div className='container-single'>
    <div className='nav-back'>
    <button className='back-btn' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
    </div>
                    <div key={pokemon.id} className="card-single">
                    <Link to={`/pokemon/${pokemon.id}`}>
                    <div className="img-card-single" style={ {backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg)`}}></div>
                    <div className="container-text">
                    <p>{pokemon.name}</p> 
                    </div>
                    </Link>
                </div>
             
    {/* <button className='back-btn' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button> */}

    {/* <img src={``} /> */}
    {/* <p className='text-single'>{pokemon.name}</p> */}
    {/* <p>{pokemon.sprites.other.dream_world.front_default}</p> */}
    </div>
    </>
  )
}
