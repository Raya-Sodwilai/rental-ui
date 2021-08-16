import React, { useState, useEffect } from 'react';
import { isValidElement } from 'react';
import { getAllRentalsForUser, deleteRental, editRental } from './api';
import { Card, CardColumns } from 'react-bootstrap';

function Profile(props) {
  const [state, setState] = useState('');
  const [userRentals, setUserRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [newRental, setNewRental] = useState("");
  const { loggedUser } = props;

  useEffect(() => {
    getAllRentalsForUser(loggedUser.id).then((response) => {
      setUserRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);

  const handleDeleteRental = (userId, rentalId) => {
    deleteRental(userId, rentalId).then(() => {
      const newUserRentalList = userRentals.filter(obj => obj.id !== rentalId);

      setUserRentalList(newUserRentalList);
    });
  };

  return (
    <div>
      {userRentals.map((val, key) => {
        return (
          <CardColumns>
            <Card className="profile-card">
              { val.images ?  <img className="profile-card-img" variant="top" src={'http://localhost:3001/' + val.images[0]} /> :
              <Card.Img className="profile-card-img" variant="top" src="holder.js/100px160" />}
              <Card.Body>
                <Card.Title>{val.brand}</Card.Title>
                <Card.Text className="profile-card-detail">
                  <p>Brand: {val.brand}</p>
                  <p>Size: {val.size}</p>
                  <p>Material: {val.material}</p>
                  <p>Color: {val.color}</p>
                  <p>Description: {val.description}</p>
                  <p>Biweekly Price: {val.biweekly_price}</p>
                  <p>Monthly Price: {val.monthly_price}</p>

                  <button className="butn" onClick={() => {
                    handleDeleteRental(loggedUser.id, val.id);
                    }}
                    >
                      Delete
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        );
      })}
    </div>
  );
}

export default Profile;