import axios from "axios";

const service = axios.create({

  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000",
});

// SERVICE TO RETRIEVE ALL ACTIVITIES
export const getAllActivities = (id) => {
  console.log ('I AM GETTING ALL ACTIVITIES ON THE CLIENT SIDE')
  return service
    .get('/activities')
    .then((response) => response.data)
    .catch((err) => err);
};

//SERVICE TO GET ALL ACTIVITY DETAILS
export const getActivityDetails = (id) => {
  console.log ('I AM GETTING ONE DETAIL ON THE CLIENT SIDE')
  return service
    .get(`/activities/${id}`)
    .then((response) => response.data)
      //setState(response.data)
    .catch((err) => err);
};

// SERVICE TO CREATE AN ACTIVITY
export const createActivity = (activity) => {

  console.log ("I AM CREATING AN EVENT ON CLIENT SIDE")
  return service
    .post('/activities/create',activity)
    .then((response) => response.data)
    .catch((err) => err);
  }

//SERVICE UPLOADING IMAGES WHEN CREATING OR EDITING/UPDATING ACTIVITIES

export const uploadImage = (photoUrl) => {
  
  console.log ('I AM UPLOADING IMAGES WHEN CREATING ON THE CLIENT SIDE')
  
  const uploadData = new FormData();
  uploadData.append("image", photoUrl); 

  return service
    .post('/activities/upload',uploadData) // new FormData().append('image',photoUrl)=uploadData
    .then (response => response.data)
    .catch((err) => err);
 };


// SERVICE TO UPDATE ACTIVITY

export const updateActivity = (id,activity) => {
  console.log ("I AM UPDATING AN EVENT ON CLIENT SIDE")
  // start date llega en undefined
  console.log ('activity:',activity)
  return service
    .post(`/activities/update/${id}`,activity)
    .then((response) => response.data)
    .catch((err) => err);
};

//SERVICE TO BOOK AN ACTIVITY

export const bookingActivity = (id, accessToken) => {

  console.log ("I AM ATTENDING AN EVENT ON CLIENT SIDE")
  return service
    .post(`/activities/${id}`, { accessToken: accessToken })
    .then((response) => response.data)
    .catch((err) => err);
};

//SERVICE TO SEARCH ALL ACTIVITIES

export const searchActivities = (search) => {
  //const search = {destinations:destinations,startDate:startDate,endDate:endDate,type:type}
  console.log ('I AM SEARCHING ALL ACTIVITIES ON THE CLIENT SIDE')
  return service
    .post('/activities/search',search)
    .then((response) => response.data)
    .catch((err) => err);
};

// SERVICE DELETE ACTIVITIES

export const deleteActivity = (id) => {

  console.log ("I AM DELETING AN ACTIITY ON CLIENT SIDE")
  return service
    .delete(`/activities/delete/${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};



    