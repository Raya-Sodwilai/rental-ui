import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Axios from "axios";

function RentalDetail(props) {
  const[rental, setRental] = useState({});
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setRental(location.state.rental);
  });

  return (
    <div>
      <div className="detail-card mb-3">
        <div className="row g-0">
          <div className="col-md-7">
          { rental.images ?  <img className="rental-detail-img" src={'http://localhost:3001/' + rental.images[0]} /> :
              <img className="rental-detail-img" src="holder.js/100px180?text=Image cap" />}
          </div>
        </div>
        <div class="col-md-5">
          <div class="card-body-detail">
            <p>Brand: {rental.brand}</p>
            <p>Size: {rental.size}</p>
            <p>Material: {rental.material}</p>
            <p>Color: {rental.color}</p>
            <p>Description: {rental.description}</p>
            <p>Biweekly Price: {rental.biweekly_price}</p>
            <p>Monthly Price: {rental.monthly_price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentalDetail;