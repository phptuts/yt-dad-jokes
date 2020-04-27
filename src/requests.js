export const getRandomJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });

  const json = await response.json();

  return json.joke;
};

export const getSearchJokes = async (term) => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${term}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  const json = await response.json();

  return json.results;
};
