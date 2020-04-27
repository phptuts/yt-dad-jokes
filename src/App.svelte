<script>
  import { onMount } from "svelte";

  import { Col, Container, Row, Button } from "sveltestrap";

  import { getRandomJoke, getSearchJokes } from "./requests.js";

  import JokeForm from "./Form.svelte";
  import Joke from "./Joke.svelte";
  let randomJoke;
  let jokes = [];
  let mode = "loading";
  onMount(async () => {
    await onRandomJoke();
  });

  async function onSearch(e) {
    try {
      mode = "loading";
      jokes = await getSearchJokes(e.detail);
      mode = "search";
      console.log(jokes);
    } catch (e) {
      alert("There was an error ahaha");
    }
  }

  async function onRandomJoke() {
    try {
      mode = "loading";
      randomJoke = await getRandomJoke();
      mode = "random";
    } catch (e) {
      alert("There was an error ahaha");
    }
  }
</script>

<style>
  :global(.random-joke) {
    width: 100%;
  }
  :global(.row) {
    margin-top: 10px;
  }
</style>

<Container>
  <Row>
    <Col>
      <h1>Dad Jokes!!! :)</h1>
    </Col>
  </Row>
  <JokeForm on:search={onSearch} />
  <Row>
    <Col>
      <Button on:click={onRandomJoke} class="random-joke" color="danger">
        Random Joke
      </Button>
    </Col>
  </Row>
  {#if mode === 'random'}
    <Row>
      <Col>
        <Joke joke={randomJoke} />
      </Col>
    </Row>
  {/if}

  {#if mode === 'search' && jokes.length > 0}
    {#each jokes as jokeObj (jokeObj.id)}
      <Row>
        <Col>
          <Joke joke={jokeObj.joke} />
        </Col>
      </Row>
    {/each}
  {/if}
  {#if mode === 'search' && jokes.length == 0}
    <Row>
      <Col>
        <Joke joke="Jokes on you!!! :) Please try another search." />
      </Col>
    </Row>
  {/if}
</Container>
