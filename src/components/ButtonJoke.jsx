import React, { useState } from 'react'

const ButtonJoke = ({name,handleClick,isMark}) => {
  const style1 ='border-2 border-solid  rounded-[0.5em] w-[10em] h-[3em] font-semibold bg-[#892be3]'
  const style2 ='border-2 border-solid  rounded-[0.5em] w-[10em] h-[3em] font-semibold bg-[#935DC8]'
  return (
    <div>
      <button className={isMark === name?style1:style2} onClick={()=>handleClick(name)}>{name}</button>
    </div>
  )
}

export default ButtonJoke
