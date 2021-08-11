import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';

function Home(props) {
  const[rentals, setRentalList] = useState([]);
  const [hasError, setHasError] = useState(false);
  
  let history = useHistory();

  const rentalDetail = (rental) => {
    history.push({
      pathname: '/rental-detail',
      state: {rental: rental}
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      setRentalList(response.data);
    }).catch(err => setHasError(true));
  }, []);

  return (
    <div className="container">
      {rentals.map((val, key) => {
        return (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5">
              { val.images ?  <img className="item-img" src={'http://localhost:3001/' + val.images[0]} /> :
              <img className="item-img" src="holder.js/100px180?text=Image cap" />}
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-titile">{val.brand}</h5>
                  <p className="card-body">Biweekly Price: {val.biweekly_price}</p>
                  <p className="card-body">Monthly Price: {val.monthly_price}</p>
                  <button className="item-expand" onClick={() => rentalDetail(val)}> View</button>
                </div>
              </div>
            </div>
          </div>
        );
      })} 
    </div>
  )
}

export default Home;