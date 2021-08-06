import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from './components/Pokemon';
import Answers  from './components/Answers';
import Results from './components/Results';
import { GrLinkedin } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loader, setLoader] = useState(true);
  const [correct, setCorrect] = useState('');
  const [bright, setBright] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const randomNum = (n) => Math.floor(Math.random() * n);
  
  const handleFetchPokemons = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500');
      const auxNum = randomNum(500);
      const numberOfPokemons = 4;
      setPokemons(data.results.slice(auxNum, auxNum + numberOfPokemons));
    } catch (error) {
      console.log(error);
    }
  }

  const fadeScore = () => {
    const TWO_SEC = 2000;
    const timeout = setInterval(() => {
      window.location.reload();
    }, TWO_SEC)
    return () => clearInterval(timeout);
  }

  const handleClick = (e) => {
    const answer = e.target.innerText.toLowerCase();
    setBright(1);
    setShowResults(true);
    setIsWinner(false);
    fadeScore();
    if (correct === answer) {
      setIsWinner(true);
      let count = parseInt(localStorage.getItem('counter')) || 0;
      localStorage.setItem('counter', count += 1);
    }
  }

  useEffect(() => {
    handleFetchPokemons();
    setBright(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoader(true);
    const TWO_SEC = 2000;
    const timeout = setInterval(() => {
      setLoader(false);
    }, TWO_SEC);
    return () => clearInterval(timeout);
  }, []);

  if (loader) {
    return (
      <section className="pokeball-container">
      <div className="pokeball-wrapper">
        <div className="pokeball"></div>
      </div>
      </section>
    );
  }

  const score = localStorage.getItem('counter') || 0;
  return (
    <>
    <main>
      <div className="title">
        <h1>Quem eh esse pokemon ?</h1>
      </div>
      <div className="pokemon">
        <Pokemon
          bright={ bright }
          setCorrect={ setCorrect }
          randomNum={ randomNum }
          pokemons={ pokemons }
        />
      </div>
      <div className="answers">
        <Answers
          handleClick={ handleClick }
          pokemons={ pokemons }
        />
      </div>
        {showResults && <Results isWinner={ isWinner } correct={ correct } />}
      <div className="score">
        <span>{ score }</span>
      </div>
    </main>
    <footer>
      <p>All rights reserved
        <a
          href="https://www.linkedin.com/in/alexandre-pereira-0aba82205"
          target="_blank"
          rel="noreferrer"
        >
          &copy;Alexandre
        </a>
      </p>
      <p>reference
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
        >
          Pokemon
        </a>
      </p>
      <p>rede sociais</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/alexandre-pereira-0aba82205/" target="_blank" rel="noreferrer"><GrLinkedin/ > </a>
        <a href="https://github.com/Naitwa-Alexandre" rel="noreferrer" target="_blank"><AiOutlineGithub/ ></a>
        <a href="https://www.instagram.com/naitwa.alexandre/" rel="noreferrer" target="_blank"><AiOutlineInstagram/ ></a>
      </div>
    </footer>
  </>
  );
}

export default App;
