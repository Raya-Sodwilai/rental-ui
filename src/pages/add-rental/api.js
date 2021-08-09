import Axios from "axios";

export const imageUpload = (formData, rentalId) => {
  Axios.post(`http://localhost:3001/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {
      rentalId: rentalId,
    },
  });
};

export const createRental = ({
  userId,
  brand,
  size,
  material,
  color,
  description,
  biweeklyPrice,
  monthlyPrice,
}) => {
  return Axios.post("http://localhost:3001/users/:userId/posts", {
    userId: userId,
    brand: brand,
    size: size,
    material: material,
    color: color,
    description: description,
    biweeklyPrice: biweeklyPrice,
    monthlyPrice: monthlyPrice,
  });
};