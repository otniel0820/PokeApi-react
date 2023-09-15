
import { useState } from 'react';
import './App.css';
import PokeList from './components/PokeList';

import JokeList from './components/JokeList';

function App() {
  const [jokes, setJokes]= useState('school')
  return (
    <div className="pt-[2em]">
      {/* <PokeList/> */}
      <JokeList
      jokes={jokes}
      setJokes={setJokes}
      
      
      />
    </div>
  );
}

export default App;
