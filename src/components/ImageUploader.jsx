import React from 'react';
import { useState } from "react";

function ImageUploader(event) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList ]
  const file = event.target.files[0];

  return (
    <div className="image">
      <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
    </div>
  )
}

export default ImageUploader;