import React from "react";
// import propTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return (
            <> 
            <div>
            <p> { name }</p>
            <p> { type }</p>
            <p> { `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
            <img src={ image } alt={ `${name}` }/>
            </>
        )
    }
}

export default Pokemon;
