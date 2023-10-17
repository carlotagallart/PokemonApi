import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import CardColumn from "./components/cardColumn";
import CardList from "./components/cardList";
// npm + importem fontawesome + icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [urlApi, setUrlApi] = useState('https://pokeapi.co/api/v2/pokemon/')

  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      // consumim la API
      const res = await axios.get(urlApi);
      //agafem la data que hi ha dins
      const data = res.data.results;
      // fem un map per poder agafar les URLs de la info de cada Pokemon
      const dataInfo = data.map(async (pokemon) => {
        // consumim la url de cada pokemon
        const urlPokemonInfo = await axios.get(pokemon.url);
        // agafem i retornem la data
        const pokemons = await urlPokemonInfo.data;
        return pokemons;
      });
      // executem l'array de promeses
      setPokemonInfo(await Promise.all(dataInfo));
      setLoading(false);
    };
    // executem getAPI
    getApi()

  }, [urlApi]);


  
  return (
    <div className="App">
      <button onClick={() => setActive(!active)} disabled={active}>
        <FontAwesomeIcon icon={faGrip} />
      </button>
      <button onClick={() => setActive(!active)} disabled={!active}>
        <FontAwesomeIcon icon={faList} />
      </button>
      
      {(active && <CardColumn pokemonInfo={pokemonInfo} />) || (!active && <CardList />)}
    </div>
  );
}

export default App;
