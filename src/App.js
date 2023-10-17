import { useEffect, useState } from "react";

// importem axios
import axios from 'axios';
import "./App.css";
// importem els components
import CardColumn from "./components/cardColumn";
import CardList from "./components/cardList";
// npm + importem fontawesome + icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [urlApi, setUrlApi] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      // consumim la API
      const res = await axios.get(urlApi);
      //agafem la data que hi ha dins
      const data = res.data.results;
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
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
      {/* mirem que tingui url de prev o next si te la mostrem si no te no ho mostem */}
      {prevPage && <button onClick={()=>{
        setUrlApi(prevPage)
      }
      }> <FontAwesomeIcon icon={faArrowLeft} /></button>}
      {nextPage && <button onClick={()=>{
        setUrlApi(nextPage)
      }
      }> <FontAwesomeIcon icon={faArrowRight} /></button>}
    </div>
  );
}

export default App;
