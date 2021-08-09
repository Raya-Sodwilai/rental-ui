const ImageUploader = (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('image', file);

  return (
    <div className="image">
      <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
    </div>
  )
}
