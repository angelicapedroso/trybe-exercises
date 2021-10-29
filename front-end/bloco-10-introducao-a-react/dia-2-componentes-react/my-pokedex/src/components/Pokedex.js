import React from "react";
import propTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>
            {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}  
            </div>
        )
    }
}

export default Pokedex;
