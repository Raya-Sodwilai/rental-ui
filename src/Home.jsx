import React, {useState, useEffect} from 'react';
import Axios from "axios";

function Home(props) {
  const[rentals, setRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      setRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);

  return (
    <div className="posts">
      {rentals.map((val, key) => {
        return (
          <div className="post">
            <div>
              <h4>Brand: {val.brand}</h4>
              <h4>Size: {val.size}</h4>
              <h4>Material: {val.material}</h4>
              <h4>Color: {val.color}</h4>
              <h4>Description: {val.description}</h4>
              <h4>Biweekly Price: {val.biweekly_price}</h4>
              <h4>Monthly Price: {val.monthly_price}</h4>
            </div>
          </div>
        );
      })} 
    </div>
  )
}

export default Home;