import { React, useState, useEffect } from "react";
import ButtonJoke from "./ButtonJoke";
import JokeCard from "./JokeCard";

export const getJoke = async (url) => {
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  return res.json();
};
const JokeList = ({ jokes, setJokes }) => {
  const [dadJoke, setDadJoke] = useState([]);
  const [isMark, setIsMark]=useState(false)
  useEffect(() => {
    getJoke(`https://icanhazdadjoke.com/search?term=${jokes}&limit=5`).then(
      (data) => setDadJoke(data)
    );
  }, []);

  const jokeList = dadJoke.results;
  console.log(jokeList);
  const handleClick = (name) => {
    getJoke(`https://icanhazdadjoke.com/search?term=${name}&limit=5`).then(
      (data) => setDadJoke(data)
      );
      setJokes(name);
      setIsMark(true)
  };

  return (
    <div className="flex flex-col gap-[1em]">
      <div className="flex gap-[6em] justify-center items-center">
        <ButtonJoke key={1} mark={isMark?'#935dc8':'#892be3'} name={"Birds"} handleClick={handleClick} />
        <ButtonJoke key={2} name={"Car"} handleClick={handleClick} />
        <ButtonJoke key={3} name={"Hipster"} handleClick={handleClick} />
        <ButtonJoke key={4} name={"Dad"} handleClick={handleClick} />
      </div>

      <div className="flex flex-col gap-[2em] justify-center items-center">
        {jokeList?.map((joke) => {
          return <JokeCard key={joke.id} joke={joke.joke} />;
        })}
      </div>
    </div>
  );
};

export default JokeList;
