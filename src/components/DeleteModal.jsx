import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal(props) {
  return (
    <Modal {...props}>
      <Modal.Header className="delete">
        <Modal.Title>Delete Rental</Modal.Title>
      </Modal.Header>
      <Modal.Body className="delete">
        Are you sure you want to delete this?
      </Modal.Body>
      <Modal.Footer>
        <Button className="butn" onClick={props.onHide}>
          Close
        </Button>
        <Button
          className="delete-butn"
          onClick={props.handleDeleteRental}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
