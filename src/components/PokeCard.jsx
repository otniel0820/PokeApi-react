import {React, useEffect, useState} from 'react'
import { getPokemon } from './PokeList';

const PokeCard = ({url, handleClick}) => {
    const [uniquePokemon, setUniquePokemon]= useState()
    useEffect(() => {
        getPokemon(url).then((data) => setUniquePokemon(data));
      }, []);
	
	
  return (
    <div className='w-[15em] flex flex-col justify-center items-center border-2 border-solid border-black rounded-[1em]' style={{backgroundColor:`${uniquePokemon?.id%2===0?'#00CED1':'#FA8072'}`,color:`black`}}>
      <p>{uniquePokemon?.name}</p>
      <p>{uniquePokemon?.id}</p>
      <img className='w-[10em] h-[10em]' src={uniquePokemon?.sprites.other.dream_world.front_default} alt="" />
      <button onClick={()=>handleClick(uniquePokemon.name)} className='border-2 border-solid border-slate-100 mb-[1em] rounded-[0.5em] w-[10em]'>Eliminar Pokemon 😢</button>
      
    </div>
  )
}

export default PokeCard
