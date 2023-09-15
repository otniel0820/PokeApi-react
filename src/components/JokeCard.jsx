import React from 'react'

const JokeCard = ({joke}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#6a6af6] w-[60em] h-[8em] p-[3em] rounded-[0.7em]'>
      <p className='font-semibold text-[1.5em] text-white'>{joke}</p>
    </div>
  )
}

export default JokeCard
