import React, { useState, useEffect } from 'react';
import { getAllRentalsForUser, deleteRental, editRental } from './api';
import DeleteModal from '../../components/DeleteModal';
import EditModal from '../../components/EditModal';
import { Card, CardColumns } from 'react-bootstrap';

function Profile(props) {
  const [userRentals, setUserRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [activeDeleteModal, setActiveDeleteModal] = useState('');
  const [activeEditModal, setActiveEditModal] = useState('');
  const { loggedUser } = props;

  const deleteClickHandler = (e, index) => setActiveDeleteModal(index);
  const hideActiveDeleteModal = () => setActiveDeleteModal('');
  const editClickHandler = (e, index) => setActiveEditModal(index);
  const hideActiveEditModal = () => setActiveEditModal('');

  useEffect(() => {
    getAllRentalsForUser(loggedUser.id).then((response) => {
      setUserRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);


  const handleDeleteRental = (userId, rentalId) => {
    deleteRental(userId, rentalId).then(() => {
      const newUserRentalList = userRentals.filter(obj => obj.id !== rentalId);
      setUserRentalList(newUserRentalList);
      hideActiveDeleteModal();
    });
  };

  const handleEditRental = (userId, rentalId, updatedRental) => {
    editRental(userId, rentalId, updatedRental).then(() => {
      const newUserRentalList = userRentals.map(r => {
        if (r.id === rentalId) {
          return { ...r, ...updatedRental }
        }
        else {
          return r;
        }
      });
      setUserRentalList(newUserRentalList);
      hideActiveEditModal();
    });
  };

  return (
    <div>
      {userRentals.map((rental, index) => {
        return (
          <CardColumns>
            <Card className="profile-card">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {rental.images ? <img className="profile-card-img" variant="top" src={'http://localhost:3001/' + rental.images[0]} /> :
                      <Card.Img className="profile-card-img" variant="top" src="holder.js/100px160" />}
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
              </div>
              <Card.Body>
                <Card.Title>{rental.brand}</Card.Title>
                <Card.Text className="profile-card-detail">
                  <p>Brand: {rental.brand}</p>
                  <p>Size: {rental.size}</p>
                  <p>Material: {rental.material}</p>
                  <p>Color: {rental.color}</p>
                  <p>Description: {rental.description}</p>
                  <p>Biweekly Price: {rental.biweekly_price}</p>
                  <p>Monthly Price: {rental.monthly_price}</p>


                  <button className="edit-butn" onClick={(e) => editClickHandler(e, index)}>
                    Edit
                  </button>

                  <button className="delete-butn" onClick={(e) => deleteClickHandler(e, index)}>
                    Delete
                  </button>


                  <DeleteModal id={index} handleDeleteRental={() => handleDeleteRental(loggedUser.id, rental.id)} show={activeDeleteModal === index} onHide={hideActiveDeleteModal} />
                  <EditModal id={index} rental={rental} userId={loggedUser.id} handleEditRental={handleEditRental} show={activeEditModal === index} onHide={hideActiveEditModal} />

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