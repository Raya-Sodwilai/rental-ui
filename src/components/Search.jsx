import { Form, Button, FormControl, Row, Col } from "react-bootstrap";

const Search = () => {
  return <div>Luxury Purse Rentals</div>
}

const SearchBar = () => (
  <Form action="/" method="get">
    <Row>
      <Col xs={{span: 2, offset: 9}}>
        <FormControl type="text" id="header-search" aria-describedby="basic-addon2" />
      </Col>
      <Col xs={1}>
        <Button className="butn" id="button-addon2" type="submit">
          Search
        </Button>
      </Col>
    </Row>
  </Form>
);

export default SearchBar;