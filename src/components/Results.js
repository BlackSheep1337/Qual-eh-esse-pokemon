import React from 'react';
import { ResultsContainer } from './styles';

export default function Results({ correct, isWinner }) {
  return (
    <ResultsContainer>
      <h1>Eh o { correct }</h1>
      <h3>{ !isWinner ? 'Que pena :( Boa sorte na proxima!' : 'Voce acertou parabens!! :)'}</h3>
    </ResultsContainer>
  )
}
