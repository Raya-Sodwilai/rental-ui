import { Form, InputGroup, Button, FormControl } from "react-bootstrap";

const Search = () => {
  return <div>Luxury Purse Rentals</div>
}

const SearchBar = () => (
  <Form action="/" method="get">
    <InputGroup className="mb-3">
      <Form.Label className="visually-hidden">
        Find Your Purse
      </Form.Label>
      <FormControl
        type="text" 
        id="header-search" 
        placeholder="Find Your Purse"
        aria-describedby="basic-addon2"
      />

      <Button variant="outline-secondary" id="button-addon2" type="submit">
        Search
      </Button>
    </InputGroup>
  </Form>
);

export default SearchBar;