import Axios from "axios";

export const getAllRentalsForUser = (userId) => {
  return Axios.get(`http://localhost:3001/users/${userId}/profile`);
};

export const deleteRental = (userId, rentalId) => {
  return Axios.delete(`http://localhost:3001/users/${userId}/rentals/${rentalId}`);
};

// export const editRental = (rental) => {
//   return Axios.put("http://localhost:3001/edit/:id", {

//   });
// };