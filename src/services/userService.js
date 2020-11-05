import axios from "axios";


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

export const getProfile = (id) => {
  const accessToken = localStorage.getItem("accessToken")

  console.log ('I AM DISPLAYING PROFILE FROM CLIENT SERVICE')
  return service
    .get('/user/profile/' + accessToken)
    .then((response) => response.data)
    .catch((err) => {
      console.log("The error in the services: ", err);
    });
};

//SERVICE UPLOADING IMAGES WHEN CREATING OR EDITING/UPDATING ACTIVITIES

export const uploadImage = (photoUrl) => {
  
  console.log ('I AM UPLOADING IMAGES WHEN CREATING ON THE CLIENT SIDE')
  
  const uploadData = new FormData();
  uploadData.append("image", photoUrl); 

  return service
    .post('/user/upload',uploadData) // new FormData().append('image',photoUrl)=uploadData
    .then (response => response.data)
    .catch((err) => err);
 };



// EDIT USER PROFILE

// FIRST OPTION
// export const profileEdit = (user,accessToken ) => {

//   console.log ("I AM UPDATING A USER PROFILE ON CLIENT SIDE")
//   console.log ('user:',user)

//   return service
//     .post('/user/profile/edit'+ accessToken,user)
//     .then((response) => response.data)
//     .catch((err) => err);
// };

export const profileEdit = (user,id ) => {

  console.log ("I AM UPDATING A USER PROFILE ON CLIENT SIDE")
  console.log ('user:',user)

  return service
    .post('/user/profile/edit'+ id,user)
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

