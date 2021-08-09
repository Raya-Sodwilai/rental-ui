import Axios from "axios";

export const getAllRentalsForUSer = (userId) => {
  return Axios.get("http://localhost:3001/users/:userId/posts", {userId});
};