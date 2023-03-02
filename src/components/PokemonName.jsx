import React from "react";

function PokemonName({ name }) {
  return (
    <div className="pokemon-name">
      <h1>{name}</h1>
    </div>
  );
}

export default PokemonName;
