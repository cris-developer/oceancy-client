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

//SERVICE UPLOADING IMAGES WHEN CREATING ACTIVITIES

 export const uploadImagesCreate = (photoUrl) => {
  //const search = {destinations:destinations,startDate:startDate,endDate:endDate,type:type}
  console.log ('I AM UPLOADING IMAGES WHEN CREATING ON THE CLIENT SIDE')
  
  const uploadData = new FormData();

  uploadData.append("image", photoUrl);
  
  return service
    .post('/activities/upload',uploadData)
    .then((response) => response.data)
    .catch((err) => err);
};


// const errorHandler = err => {
//   console.error(err);
//   throw err;
// };
// export default {
//   service,
//   handleUpload (theFile) {
//     console.log('file in service: ', theFile)
//     return service.post('/upload', theFile)
//       .then(res => res.data)
//       .catch(errorHandler);
//   },
//   saveNewThing (newThing) {
//     console.log('new thing is: ', newThing)
//     return service.post('/things/create', newThing)
//       .then(res => res.data)
//       .catch(errorHandler);
//   }
// }

//SERVICE UPLOADING IMAGES WHEN UPDATING ACTIVITIES

 export const uploadImagesEdit = (id,theFile) => {
  
  console.log ('I AM UPLOADING IMAGES WHEN EDITING ON THE CLIENT SIDE')
  return service
    .post(`/activities/update/${id}`,theFile)
    .then((response) => response.data)
    .catch((err) => err);
};

// export function uploadImageEdit(image) {
//   const uploadData = new FormData();

//   uploadData.append("image", image);
//   return service
//     .post("user/image", uploadData)
//     .then(({ data }) => data)
//     .catch(console.error);
// }

//---//
// const errorHandler = err => {
//   console.error(err);
//   throw err;
// };
// export default {
//   service,
//   handleUpload (theFile) {
//     console.log('file in service: ', theFile)
//     return service.post('/upload', theFile)
//       .then(res => res.data)
//       .catch(errorHandler);
//   },
//   saveNewThing (newThing) {
//     console.log('new thing is: ', newThing)
//     return service.post('/things/create', newThing)
//       .then(res => res.data)
//       .catch(errorHandler);
//   }
// }

// SERVICE TO UPDATE ACTIVITY
export const updateActivity = (id,activity) => {
  console.log ("I AM UPDATING AN EVENT ON CLIENT SIDE")
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



    