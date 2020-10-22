import axios from "axios";

const service = axios.create({
  //baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:5000",
});

export const getActivityDetails = (id) => {
  return service
    .get(`activityDetails/${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};

    // getEventDetails = id => this.service.get(`/eventDetails/${id}`)
    // createEvent = event => this.service.post('/newEvent', event)
    // searchEvents = name => this.service.post('/search', name)
    // getAllEvents = () => this.service.get('/eventList')
    // updateEvent = (id, event) => this.service.post(`/eventDetails/update/${id}`, event)