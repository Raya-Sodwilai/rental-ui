import "./App.css";
import { useState } from "react";
import Axios from "axios";

function Rent(props) {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [biweeklyPrice, setBiweeklyPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);

  const[postList, setPostList] = useState([]);
  const {userId} = props;

  const createPost = ({loggedUser}) => {
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

  const getPosts = () => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPostList(
        postList.filter((val) => {
          return val.id !== id;
        })
      );
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
        <button onClick={createPost}>Create</button>
      </div>
      <div className="posts">
        <button onClick={getPosts}>Show Posts</button>
          
        {postList.map((val, key) => {
          return (
            <div className="post">
              <div>
                <h3>Brand: {val.brand}</h3>
                <h3>Size: {val.size}</h3>
                <h3>Material: {val.material}</h3>
                <h3>Color: {val.color}</h3>
                <h3>Description: {val.description}</h3>
                <h3>Biweekly Price: {val.biweeklyPrice}</h3>
                <h3>Monthly Price: {val.monthlyPrice}</h3>
              </div>
              <div>

                <button
                  onClick={() => {
                    deletePost(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })} 
      </div>
    </div>
  );
}

export default Rent;