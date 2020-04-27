<script>
  import {
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Col,
    Row
  } from "sveltestrap";
  import { createEventDispatcher } from "svelte";
  let term = "";
  $: canSubmit = term.length > 0;
  const dispatch = createEventDispatcher();

  function onSearch(e) {
    e.preventDefault();
    if (canSubmit) {
      dispatch("search", term);
      term = "";
    }
  }
</script>

<style>
  :global(.search) {
    margin-top: 30px;
    width: 100%;
  }

  :global(button:disabled) {
    cursor: not-allowed;
  }

  @media (max-width: 700px) {
    :global(.search) {
      margin-top: 0;
    }
  }
</style>

<Form on:submit={onSearch}>
  <Row>
    <Col md="8" xs="12">
      <FormGroup>
        <Label for="dadJokesSearch">Search</Label>
        <Input
          type="text"
          bind:value={term}
          id="dadJokesSearch"
          placeholder="Search For Your Favorite Dad Jokes" />
      </FormGroup>
    </Col>
    <Col md="4" xs="12">
      <Button
        disabled={!canSubmit}
        type="submit"
        color="primary"
        class="search">
        Search
      </Button>
    </Col>
  </Row>

</Form>
