import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleNameChange = (event) => {
    setShow(false);
    setShowError(false);
    setName(event.target.value);
  };
  const handleCountryChange = (event) => {
    setShow(false);
    setShowError(false);
    setCountry(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3 || name.charAt(0) === " " || country.length < 6) {
      setShow(false);
      setShowError(true);
      return;
    }
    setShow(true);
    setShowError(false);
  };

  return (
    <div className="App">
      <h1>Elige tu equipo de futbol favorito</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre del equipo"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="País de origen"
            value={country}
            onChange={handleCountryChange}
          />
        </div>
        <button type="submit" style={{margin:"8px 0px 8px 0px", backgroundColor:"#d2e0e8"}}>Enviar</button>
      </form>
      {show && <Card name={name} country={country} />}
      {showError && (
        <p style={{ color: "red" }}>
          Por favor verifica la información ingresada.
        </p>
      )}
    </div>
  );
}

export default App;
