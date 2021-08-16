import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Carousel, Container } from 'react-bootstrap';

function RentalDetail(props) {
  const[rental, setRental] = useState({});
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setRental(location.state.rental);
  });

  return (
    <Container>
      <Carousel className='carousel-wrapper'>
        { rental.images ? rental.images.map((image) => {
            return (
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={'http://localhost:3001/' + image} /> 
              </Carousel.Item>
            )
          }) :
          <img variant="top" src="holder.js/100px160" />
        }
      </Carousel>
      <Card className="card-body-detail">
        <Card.Body>Brand: {rental.brand}</Card.Body>
          <Card.Body>Size: {rental.size}</Card.Body>
          <Card.Body>Material: {rental.material}</Card.Body>
          <Card.Body>Color: {rental.color}</Card.Body>
          <Card.Body>Description: {rental.description}</Card.Body>
          <Card.Body>Biweekly Price: {rental.biweekly_price}</Card.Body>
          <Card.Body>Monthly Price: {rental.monthly_price}</Card.Body>
      </Card>
    </Container>
  );
}

export default RentalDetail;