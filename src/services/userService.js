import axios from "axios";

const service = axios.create({
  //baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:5000",
});

export const validateSession = (accessToken) => {
  return service
    .get(`/user/session/${accessToken}`)
    .then((response) => response.data)
    .catch((err) => err);
};
export const signup = ({ username, email, password }) => {
  return service
    .post("/user/signup", { username, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

export const login = ({ email, password }) => {
  return service
    .post("/user/login", { email, password })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};
export const profile = ({ username, email, password }) => {
  return service
    .get('/user/profile',{ username, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

export const profileEdit = ({ username, email, password }) => {
  return service
    .post('/user/profile/edit',{ username, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

