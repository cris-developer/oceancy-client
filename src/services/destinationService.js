import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000",
});

export const getAllDestinations = () => {
  return service
    .get(`/destinations`)
    .then((response) => response.data)
    .catch((err) => err);
};