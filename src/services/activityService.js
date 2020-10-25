import axios from "axios";

const service = axios.create({
  //baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:5000",
});

// SERVICE TO RETRIEVE ALL ACTIVITIES
export const getAllActivities = (id) => {
  console.log ('I AM GETTING ALL ACTIVITIES ON THE CLIENT SIDE')
  return service
    .get('/activities')
    .then((response) => response.data)
    .catch((err) => err);
};
//SERVICE TO SEARCH ALL ACTIVITIES
export const searchActivities = (name) => {
  console.log ('I AM SEARCHING ALL ACTIVITIES ON THE CLIENT SIDE')
  return service
    .post('/search',name)
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

// SERVICE TO UPDATE ACTIVITY
export const updateActivity = (id,activity) => {
  console.log ("I AM UPDATING AN EVENT ON CLIENT SIDE")
  console.log ('activity:',activity)
  return service
    .post(`/activities/update/${id}`,activity)
    .then((response) => response.data)
    .catch((err) => err);
};

    



    