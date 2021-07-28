import "./App.css";
import { useState } from "react";
import Axios from "axios";

function AddRental(props) {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [biweeklyPrice, setBiweeklyPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);

  const[postList, setPostList] = useState([]);
  const {userId} = props;

  const addRental = ({loggedUser}) => {
    Axios.post("http://localhost:3001/create", {
      userId: userId,
      brand: brand,
      size: size,
      material: material,
      color: color,
      description: description,
      biweeklyPrice: biweeklyPrice,
      monthlyPrice: monthlyPrice,
    }).then(() => {
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
    });
  };

  return (
    <div className="Rent">
      <div className="information">
        <label>Brand:</label>
        <input
          type="text"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <label>Size:</label>
        <input
          type="text"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <label>Material:</label>
        <input
          type="text"
          onChange={(event) => {
            setMaterial(event.target.value);
          }}
        />
        <label>Color:</label>
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Biweekly Price:</label>
        <input
          type="text"
          onChange={(event) => {
            setBiweeklyPrice(event.target.value);
          }}
        />
        <label>Monthly Price:</label>
        <input
          type="text"
          onChange={(event) => {
            setMonthlyPrice(event.target.value);
          }}
        />
        <button onClick={addRental}>Create</button>
      </div>
    </div>
  );
}

export default AddRental;