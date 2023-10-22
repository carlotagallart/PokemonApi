import { useEffect, useState } from "react";
import "./App.css";
import "./styles/cardColumn.css";
import "./styles/cardList.css";
import "./styles/singleCard.css";
import "./styles/navComponents.css";

// importem els components
import CardColumn from "./components/cardColumn";
import CardList from "./components/cardList";
// importem axios
import axios from 'axios';
// npm + importem fontawesome + icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link ,useNavigate, useLocation, useParams } from "react-router-dom";
// import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
// import ReactPaginate from 'react-paginate';

function App() {

  const location = useLocation();
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
      // console.log(res)
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    
      // fem un map per poder agafar les URLs de la info de cada Pokemon
      const dataInfo = data.map(async (pokemon) => {
        // consumim la url de cada pokemon
        const urlPokemonInfo = await axios.get(pokemon.url);
        // agafem i retornem la data
        const pokemons = await urlPokemonInfo.data;
        return pokemons;
      })

      // executem l'array de promeses
      setPokemonInfo(await Promise.all(dataInfo));
      setLoading(false);
    };
    setLoading(false);
    // executem getAPI
    getApi()
  }, [urlApi]);


  return (
    <div className="App">
      <div className="nav-grip">
      <Link to="/"> <button> <FontAwesomeIcon icon={faGrip} /> </button></Link>
      <Link to="/list"> <button> <FontAwesomeIcon icon={faList} /> </button></Link>
      </div>
      {location.pathname === "/" && <CardColumn pokemonInfo={pokemonInfo} /> }
      {location.pathname === "/list" && <CardList pokemonInfo={pokemonInfo} /> }
      {/* mirem que tingui url de prev o next si te la mostrem si no te no ho mostem */}
      <div className="nav-arrows">
      {prevPage && <button onClick={()=>{
        setUrlApi(prevPage)
      }
      }> <FontAwesomeIcon icon={faArrowLeft} /></button>}

          {nextPage && <button onClick={()=>{
            setUrlApi(nextPage)
          }
          }> <FontAwesomeIcon icon={faArrowRight} /></button>}  
       
   
      </div>

     
    </div>
  );
}

export default App;
