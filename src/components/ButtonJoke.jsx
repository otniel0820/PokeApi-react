import React from 'react'

const ButtonJoke = ({name,handleClick,mark}) => {

  const style = `border-2 border-solid  rounded-[0.5em] w-[10em] h-[3em] font-semibold bg-[${mark}]`
  return (
    <div>
      <button className={style} mark onClick={()=>handleClick(name)}>{name}</button>
    </div>
  )
}

export default ButtonJoke
