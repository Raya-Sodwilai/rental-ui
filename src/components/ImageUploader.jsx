import React, {useEffect} from 'react';
import { Form, Row, Col } from "react-bootstrap";

function ImageUploader(props) {
  const displayImages = () => {
    const imageHtmlElems = [];

    for (let i = 0; i < props.images.length; i++) {
      imageHtmlElems.push(<div>
        <img className="edit-images" src={URL.createObjectURL(props.images[i])} />
        <a href="javascript:void(0)" onClick={() => props.handleNewImagesDelete(i)}><i className="bi-x-circle"></i></a>
      </div>)
    }

    if (props.oldImages && props.oldImages.length) {
      for (let i = 0; i < props.oldImages.length; i++) {
        imageHtmlElems.push(<div>
          <img className="edit-images" src={'http://localhost:3001/' + props.oldImages[i].path} />
          <a href="javascript:void(0)" onClick={() => props.handleDeleteImage(props.oldImages[i])}><i className="bi-x-circle"></i></a>
        </div>)
      }
    }


    return imageHtmlElems;
  }

  const handleFileInput = (e) => {
    props.setImages(Array.from(e.target.files))
  }

  return (
    <Form.Group as={Row} className="add-images" controlId="formFileMultiple">
      <Form.Label column sm={3}>
        Add Pictures
      </Form.Label>
      <Col sm={3}>
        <Form.Control
          type="file"
          accept=".jpg, .jpeg"
          name="sampleFile"
          multiple={true}
          onChange={(e) => handleFileInput(e)}
        />
      </Col>
      <div as={Row} className="display-images">
        {displayImages()}
      </div>
    </Form.Group>
  )
}

export default ImageUploader;