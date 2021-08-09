import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { getAllRentalsForUSer } from './api';

function Profile(props) {
  const [state, setState] = useState('');
  const[userRentals, setUserRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const { loggedUser } = props;

  useEffect(() => {
    getAllRentalsForUSer(loggedUser.id).then((response) => {
      setUserRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);

  return (
    <div className="container">
      {userRentals.map((val, key) => {
        return (
          <div className="column">
            <div>
            <Card style={{ width: '16rem' }}>
              { val.images ? <Card.Img variant="top" src={'http://localhost:3001/' + val.images[0]} /> :
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />}
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

export default Profile;