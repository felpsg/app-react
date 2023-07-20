import React from 'react';

const Home = ({ startQuiz, setDifficulty }) => (
  <div>
    <h1>Bem-vindo ao Quiz de Programação</h1>
    <p>Selecione o nível de dificuldade:</p>
    <button className="niveis" onClick={() => { setDifficulty('fácil'); startQuiz(); }}>Fácil</button>
    <button className="niveis" onClick={() => { setDifficulty('médio'); startQuiz(); }}>Médio</button>
    <button className="niveis" onClick={() => { setDifficulty('difícil'); startQuiz(); }}>Difícil</button>
  </div>
);

export default Home;
