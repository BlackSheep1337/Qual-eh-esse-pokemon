import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImgContainer } from './styles';

export default function Pokemon({ pokemons, randomNum, setCorrect, bright }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const handleFetchPokemon = async () => {
      if (!pokemons.length) return;
        const { url } = pokemons[randomNum(4)];
        const { data } = await axios.get(url);
        setCorrect(data.name);
        setPokemon(data);
      }
    handleFetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pokemonStyle = {
    filter: `brightness(${bright})`,
  }
  
  const { sprites, name } = pokemon;
  return (
    <ImgContainer>
      {
      sprites
      && <img
        style={ pokemonStyle }
        src={ sprites.front_shiny }
        alt={ name }
      />}
    </ImgContainer>
  )
}
