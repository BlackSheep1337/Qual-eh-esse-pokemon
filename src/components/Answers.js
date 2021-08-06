import React from 'react';
import { BtnContainer } from './styles';

export default function Answers({ pokemons, handleClick }) {
  const answers = pokemons.reduce((acc, cur) => {
    return [...acc, cur.name ];
  }, []);

  return (
    <BtnContainer>
      {answers.map((name, idx) => (
        <button
          onClick={ handleClick }
          className="btn-white"
          key={ idx }
        >
          { name }
        </button>
      ))}
    </BtnContainer>
  );
}
