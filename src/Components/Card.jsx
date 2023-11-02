import React from "react";

const Card = ({ name, country }) => {
  return (
    <div style={{border:"solid black 1px", marginTop:"8px", fontWeight:"bold"}}>
      <p>Hola!</p>
      <p>Tu equipo favorito es {name} del pais {country}</p>
    </div>
  );
};

export default Card;
