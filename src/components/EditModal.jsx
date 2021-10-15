import React from "react";
import { Modal, Button, Form, Col, Row, FormControl } from 'react-bootstrap';
import { useState } from "react";
import IamgeUploader from './ImageUploader';

function EditModal(props) {
  const [brand, setBrand] = useState(props.rental.brand);
  const [size, setSize] = useState(props.rental.size);
  const [material, setMaterial] = useState(props.rental.material);
  const [color, setColor] = useState(props.rental.color);
  const [description, setDescription] = useState(props.rental.description);
  const [biweeklyPrice, setBiweeklyPrice] = useState(props.rental.biweekly_price);
  const [monthlyPrice, setMonthlyPrice] = useState(props.rental.monthly_price);
  const [newImages, setNewImages] = useState([]);
  const [oldImages, setOldImages] = useState(props.rental.images);

  const handleUpdate = () => {
    const updatedRental = {
      brand,
      size,
      material,
      color,
      description,
      biweekly_price: Number(biweeklyPrice),
      monthly_price: Number(monthlyPrice)
    }

    props.handleEditRental(props.userId, props.rental.id, updatedRental);
  };

  const handleNewImagesDelete = (index) => {
    const updatedNewImages = [...newImages];
    updatedNewImages.splice(index, 1);
    
    setNewImages(updatedNewImages);
  };

  const handleDeleteImage = (imgObj) => {
    props.handleDeleteImage(imgObj.id, props.rental.id);
    const updatedOldImages = oldImages.filter(obj => obj.id !== imgObj.id);
    setOldImages(updatedOldImages);
  }

  return (
    <Modal {...props}>
      <Modal.Header className="edit">
        <Modal.Title>Edit Rental</Modal.Title>
      </Modal.Header>
      <Modal.Body className="edit">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Brand:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.brand} onChange={(e) => setBrand(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Size:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.size} onChange={(e) => setSize(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Material:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.material} onChange={(e) => setMaterial(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Color:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.color} onChange={(e) => setColor(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Description:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.description} onChange={(e) => setDescription(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Bi-weekly Price:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.biweekly_price} onChange={(e) => setBiweeklyPrice(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrand">
            <Form.Label column sm={4}>
              Monthly Price:
            </Form.Label>
            <Col sm={5}>
              <FormControl type="text" defaultValue={props.rental.monthly_price} onChange={(e) => setMonthlyPrice(e.target.value)} />
            </Col>
          </Form.Group>
          
          <IamgeUploader 
            setImages={setNewImages}
            images={newImages}
            oldImages={oldImages}
            handleDeleteImage={handleDeleteImage}
            handleNewImagesDelete={handleNewImagesDelete}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="butn" onClick={props.onHide}>
          Close
        </Button>
        <Button className="delete-butn" onClick={handleUpdate}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
