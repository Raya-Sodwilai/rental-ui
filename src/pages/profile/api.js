import Axios from "axios";

export const getAllRentalsForUser = (userId) => {
  return Axios.get(`http://localhost:3001/users/${userId}/profile`);
};

export const deleteRental = (userId, rentalId) => {
  return Axios.delete(`http://localhost:3001/users/${userId}/rentals/${rentalId}`);
};

export const editRental = (userId, rentalId, {
    brand,
    size,
    material,
    color,
    description,
    biweekly_price,
    monthly_price
}) => {
    return Axios.put(`http://localhost:3001/users/${userId}/rentals/${rentalId}`, {
    brand,
    size,
    material,
    color,
    description,
    biweekly_price,
    monthly_price
    });
};

export const deleteImage = (imageId, rentalId) => {
  return Axios.delete(`http://localhost:3001/rentals/${rentalId}/images/${imageId}`);
};