import { useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let joke = await fetch(URL);
    let jsonResponse = await joke.json();
    console.log(jsonResponse);
    setJoke(jsonResponse);
  };
  return (
    <>
      <h3>Joker</h3>
      <h4>
        Joke: {joke.setup} - {joke.punchline}
      </h4>
      <button className="" onClick={getNewJoke}>
        Get New Joke
      </button>
    </>
  );
}
