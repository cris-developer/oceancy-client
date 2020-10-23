import axios from "axios";

const service = axios.create({
  //baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:5000",
});

export const getAllActivities = (id) => {
  return service
    .get('/activities')
    .then((response) => response.data)
    .catch((err) => err);
};

export const searchActivities = (name) => {
  return service
    .post('/search',name)
    .then((response) => response.data)
    .catch((err) => err);
};
export const getActivityDetails = (id) => {
  return service
    .get(`/activities/${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};

export const createActivity = (actitivity) => {
  return service
    .post('/activities/create')
    .then((response) => response.data)
    .catch((err) => err);
};

export const updateActivity = (id,activity) => {
  return service
    .put(`/activities/update/${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};

    
    // getAllEvents = () => this.service.get('/eventList')
    // searchEvents = name => this.service.post('/search', name)
    // getEventDetails = id => this.service.get(`/eventDetails/${id}`)
    // createEvent = event => this.service.post('/newEvent', event)
    // updateEvent = (id, event) => this.service.post(`/eventDetails/update/${id}`, event)