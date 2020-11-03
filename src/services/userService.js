import axios from "axios";
import Login from "../pages/login/Login";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000",
  
});

export const validateSession = (accessToken) => {
  return service
    .get(`/user/session/${accessToken}`)
    .then((response) => response.data)
    .catch((err) => err);
};                      
                    // { fullName, email, password }
export const signup = ({ fullName, email, password }) => {
  return service
    .post("/user/signup", { fullName, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

export const login = ({ email, password }) => {
  return service
    .post("/user/login", { email, password })
      
    .then((response) => {
      console.log(" Signup response from axios call: ", response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


// DISPLAY PROFILE   

export const getProfile = (user) => {
  
  console.log ('I AM THE USER in the services:', user)
  return service
    .post("/user/profile", { userId: user._id })
    .then((response) => response.data)
    .catch((err) => {
      console.log("The error in the services: ", err);
    });
};

// export const getProfile = (id) => {
//   console.log ('I AM DISPLAYING PROFILE FROM CLIENT SERVICE')
//   return service
//     .get('/user/profile/' + id)
//     .then((response) => response.data)
//     .catch((err) => {
//       console.log("The error in the services: ", err);
//     });
// };
// EDIT USER PROFILE
export const profileEdit = ({ fullName: fullName, email:email, password: password, favoriteActivity:favoriteActivity,photoUrl:photoUrl,accessToken }) => {
  return service
    .post('/user/profile/edit',{ fullName,email, password, favoriteActivity,photoUrl })
    .then((response) => response.data)
    .catch((err) => err);
};

// DELETE USER PROFILE
export const profileDelete = (id) => {
  return service
    .post(`/user/delete/${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};

// DISPLAY ALL PROFILES
export const getAllProfiles = (id) => {
  return service
    .get('/members')
    .then((response) => response.data)
    .catch((err) => err);
};    

