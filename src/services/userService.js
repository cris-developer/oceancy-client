import axios from "axios";


const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000",
  
});



export const validateSession = (accessToken) => {
  console.log ('My accesstoken in userroute:',accessToken)
  return service
    .get(`/user/session/${accessToken}`)
    .then((response) => response.data)
    .catch((err) => err);
};                      
             
// SIGN UP

export const signup = ({ fullName, email, password }) => {
  return service
    .post("/user/signup", { fullName, email, password })
    .then((response) => response.data)
    .catch((err) => err);
};

// LOGIN
export const login = ({ email, password }) => {

  console.log ('Email in userroute:',email);
  console.log ('password in useroute:', password)

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

// LOG OUT   

export const logout = (accessToken) => {
  return service
    .post("auth/logout", { accessToken })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// DISPLAY PROFILE   

export const getProfile = () => {
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

export const profileEdit = (user ) => {

  console.log ("I AM UPDATING A USER PROFILE ON CLIENT SIDE")
  console.log ('user:',user)

  const accessToken = localStorage.getItem("accessToken");

  return service
    .post('/user/profile/edit/'+ accessToken,user)
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

