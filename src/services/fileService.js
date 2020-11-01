import axios from "axios";

const service = axios.create({

  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000",
});


// export const fileService = (photoUrl) => {

  
//   handleUpload = photoUrl => this.service.post('/activities/upload', photoUrl)
// }



export const fileService = (photoUrl) => {
    //const search = {destinations:destinations,startDate:startDate,endDate:endDate,type:type}
    console.log ('I AM UPLOADING IMAGES WHEN CREATING ON THE CLIENT SIDE')
    
    const uploadData = new FormData();
  
    uploadData.append("image", photoUrl); 
    
    return service
      .post('/activities/upload',uploadData) // new FormData().append('image',photoUrl)=uploadData
      .then (response => response.data)
      .catch((err) => err);
  };