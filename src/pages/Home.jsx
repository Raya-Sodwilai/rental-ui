import React, {useState, useEffect} from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import Axios from "axios";

function Home(props) {
  const[rentals, setRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      setRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);

  return (
    <div className="posts">
      {rentals.map((val, key) => {
        return (
          <div className="post">
            <div>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <ListGroup className="list-group-flush">
                <ListGroupItem>Brand: {val.brand}</ListGroupItem>
                <ListGroupItem>Size: {val.size}</ListGroupItem>
                <ListGroupItem>Material: {val.material}</ListGroupItem>
                <ListGroupItem>Color: {val.color}</ListGroupItem>
                <ListGroupItem>Description: {val.description}</ListGroupItem>
                <ListGroupItem>Biweekly Price: {val.biweekly_price}</ListGroupItem>
                <ListGroupItem>Monthly Price: {val.monthly_price}</ListGroupItem>
              </ListGroup>
            </Card>
            </div>
          </div>
        );
      })} 
    </div>
  )
}

export default Home;