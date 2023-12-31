import { React, useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import Loader from "./loader/Loader";
import Loading from "./loader/Loading";
export const getPokemon = async (url) => {
    const res = await fetch(
      url
    );
    return res.json();
  };
const PokeList = ({}) => {
  const [pokemon, setPokemon] = useState([]);
  const [longitudPokemon, setLongitudPokemon] = useState(0)
  const [isLoading, setIsLoading]=useState(false)
  
  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`).then((data) => setPokemon(data.results));
    setLongitudPokemon(20)
  }, []);
    const handleClick = (name)=>{
        const deletePokemon = pokemon.filter(poke=> poke.name !== name)
        setPokemon(deletePokemon)
    }
  const handleClickMore = ()=>{
    setIsLoading(true)
    setTimeout(() => {
      getPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=${longitudPokemon}&limit=10`).then((data) => setPokemon([...pokemon,...data.results]));
        setLongitudPokemon((prev)=> prev + 10 )
        setIsLoading(false)
    }, 3000);
        
  }
  return (
    <div className=" flex flex-col justify-center items-center gap-[1em] pt-[1em] pl-[4.4em]">
        <div className="flex flex-wrap gap-[1em]">{pokemon?.map((pokemon) => <PokeCard key={pokemon.name} url={pokemon.url} handleClick={handleClick}/>
      )}</div>
      {isLoading?<Loading/>:<></>}
      
      <div><button className="border-2 border-solid border-black rounded-[0.5em] w-[10em]" onClick={handleClickMore}>Give More 😁</button></div>
      
    </div>
  );
};

export default PokeList;

