export const getRandomJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });

  const json = await response.json();

  return json.joke;
};
