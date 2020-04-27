<script>
  import { Col, Container, Row } from "sveltestrap";
  import JokeForm from "./Form.svelte";
  import Joke from "./Joke.svelte";
</script>

<Container>
  <Row>
    <Col>
      <h1>Dad Jokes!!! :)</h1>
    </Col>
  </Row>
  <JokeForm />
  <Row>
    <Col>
      <Joke joke="test joke: 0" />
    </Col>
  </Row>
</Container>
