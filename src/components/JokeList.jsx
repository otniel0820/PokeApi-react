import { React, useState, useEffect } from "react";
import ButtonJoke from "./ButtonJoke";
import JokeCard from "./JokeCard";
import Loader from "./loader/Loader";


export const getJoke = async (url) => {
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  return res.json();
};
const JokeList = ({ jokes, setJokes }) => {
  const [dadJoke, setDadJoke] = useState([]);
  const [isMark, setIsMark]=useState(false)
  const [isloader, setIsLoader]= useState(false)
  useEffect(() => {
    getJoke(`https://icanhazdadjoke.com/search?term=${jokes}&limit=5`).then(
      (data) => setDadJoke(data)
    );
  }, []);

  const jokeList = dadJoke.results;
  
  const handleClick = (name) => {
    setIsLoader(true)
    setTimeout(()=>{
        getJoke(`https://icanhazdadjoke.com/search?term=${name}&limit=5`).then(
          (data) => setDadJoke(data)
          );
          setJokes(name);
          setIsLoader(false)  
    },1000)
      setIsMark(name)
      
  };
  return (
    <div className="flex flex-col gap-[1em] pb-[10em]">
      <div className="flex gap-[6em] justify-center items-center">
        <ButtonJoke key={1} isMark={isMark} name={"Birds"} handleClick={handleClick} />
        <ButtonJoke key={2} isMark={isMark} name={"Car"} handleClick={handleClick} />
        <ButtonJoke key={3} isMark={isMark} name={"Hipster"} handleClick={handleClick} />
        <ButtonJoke key={4} isMark={isMark} name={"Dad"} handleClick={handleClick} />
      </div>
      
      {isloader?<Loader/>:<div className="flex flex-col gap-[2em] justify-center items-center">
        {jokeList?.map((joke) => {
          return <JokeCard key={joke.id} joke={joke.joke} />;
        })}
      </div>}
    </div>
  );
};

export default JokeList;
