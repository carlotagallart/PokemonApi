import { useState } from "react";
import "./App.css";
import CardColumn from "./components/cardColumn";
import CardList from "./components/cardList";
// npm + importem fontawesome + icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [active, setActive] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setActive(!active)} disabled={active}>
        <FontAwesomeIcon icon={faGrip} />
      </button>
      <button onClick={() => setActive(!active)} disabled={!active}>
        <FontAwesomeIcon icon={faList} />
      </button>
      
      {(active && <CardColumn />) || (!active && <CardList />)}
    </div>
  );
}

export default App;
