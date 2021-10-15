import "../../App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { imageUpload, createRental } from "./api";
import ImageUploader from '../../components/ImageUploader';

function AddRental(props) {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [biweeklyPrice, setBiweeklyPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [nextStatus, setNextStatus] = useState(false);
  const [postList, setPostList] = useState([]);
  const [rentalId, setRentalId] = useState(null);

  const { loggedUser } = props;
  let history = useHistory();
  
  const redirectToProfile = () => {
    history.push('/profile');
  };

  const handleNextStatus = () => {
    setNextStatus(true);
  };

  const handleNewImagesDelete = (index) => {
    const updatedNewImages = [...images];
    updatedNewImages.splice(index, 1);
    
    setImages(updatedNewImages);
  };

  const handleCreateRental = () => {
   return addRental().then(res => {
    if (res) {
      setRentalId(res.data.insertId);

      return imageHandler(res.data.insertId).then(res => {
        setPostList([
          ...postList,
          {
            brand: brand,
            size: size,
            material: material,
            color: color,
            description: description,
            biweeklyPrice: biweeklyPrice,
            monthlyPrice: monthlyPrice,
          },
        ]);

        redirectToProfile();
      }, err => {
        console.log('err', err);
      });
    }
    }, err => {
      console.log('err', err);
    });
  }

  const imageHandler = (newRentalId) => {
    const formData = new FormData();

    for (var i = 0; i < images.length; i++) {
      formData.append(`files`, images[i]);
    }

    return imageUpload(formData, newRentalId);
  };

  const addRental = () => {
    const bodyRequest = {
      userId: loggedUser.id,
      brand: brand,
      size: size,
      material: material,
      color: color,
      description: description,
      biweeklyPrice: biweeklyPrice,
      monthlyPrice: monthlyPrice,
    };

    return createRental(bodyRequest);
  };

  return (
    <div className="rent">
      {!nextStatus && (
        <div className="information">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalBrand"
            >
              <Form.Label column sm={3}>
                Brand
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalSize"
            >
              <Form.Label column sm={3}>
                Size
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalMaterial"
            >
              <Form.Label column sm={3}>
                Material
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setMaterial(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalColor"
            >
              <Form.Label column sm={3}>
                Color
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalDescription"
            >
              <Form.Label column sm={3}>
                Description
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalBiweeklyPrice"
            >
              <Form.Label column sm={3}>
                Biweekly Price
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setBiweeklyPrice(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalMonthlyPrice"
            >
              <Form.Label column sm={3}>
                Monthly Price
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setMonthlyPrice(event.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 6, offset: 5 }}>
                <Button className="butn" onClick={handleNextStatus}>
                  Next
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      )}
      {nextStatus &&
        <Form>
          <ImageUploader 
            images={images}
            setImages={setImages}
            handleNewImagesDelete={handleNewImagesDelete}
          />
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 3, offset: 9 }}>
              <Button className="butn" onClick={handleCreateRental}>Create</Button>
            </Col>
          </Form.Group>
        </Form>
      }
    </div>
  );
}

export default AddRental;