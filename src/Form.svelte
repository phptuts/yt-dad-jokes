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
</script>

<style>
  :global(.search) {
    margin-top: 30px;
    width: 100%;
  }

  @media (max-width: 700px) {
    :global(.search) {
      margin-top: 0;
    }
  }
</style>

<Form>
  <Row>
    <Col md="8" xs="12">
      <FormGroup>
        <Label for="dadJokesSearch">Search</Label>
        <Input
          type="text"
          id="dadJokesSearch"
          placeholder="Search For Your Favorite Dad Joeks" />
      </FormGroup>
    </Col>
    <Col md="4" xs="12">
      <Button color="primary" class="search">Search</Button>
    </Col>
  </Row>

</Form>
