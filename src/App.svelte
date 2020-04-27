<script>
  import { onMount } from "svelte";

  import { Col, Container, Row, Button } from "sveltestrap";

  import { getRandomJoke, getSearchJokes } from "./requests.js";

  import JokeForm from "./Form.svelte";
  import Joke from "./Joke.svelte";
  import Transition from "./Transition.svelte";
  let randomJoke;
  let jokes = [];
  let mode = "loading";
  onMount(async () => {
    await onRandomJoke();
  });

  async function onSearch(e) {
    try {
      mode = "loading";
      await sleep(1000);
      jokes = await getSearchJokes(e.detail);
      await sleep(1000);
      mode = "search";
      console.log(jokes);
    } catch (e) {
      alert("There was an error ahaha");
    }
  }

  async function onRandomJoke() {
    try {
      mode = "loading";
      await sleep(500);
      randomJoke = await getRandomJoke();
      await sleep(500);
      mode = "random";
    } catch (e) {
      alert("There was an error ahaha");
    }
  }

  const sleep = delayMS => new Promise(res => setTimeout(res, delayMS));
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
    <Transition>
      <Row>
        <Col>
          <Joke joke={randomJoke} />
        </Col>
      </Row>
    </Transition>
  {/if}

  {#if mode === 'search' && jokes.length > 0}
    <Transition>
      {#each jokes as jokeObj (jokeObj.id)}
        <Row>
          <Col>
            <Joke joke={jokeObj.joke} />
          </Col>
        </Row>
      {/each}
    </Transition>
  {/if}
  {#if mode === 'search' && jokes.length == 0}
    <Transition>
      <Row>
        <Col>
          <Joke joke="Jokes on you!!! :) Please try another search." />
        </Col>
      </Row>
    </Transition>
  {/if}
</Container>
