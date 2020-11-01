import React from "react";
import { uploadImageCreate } from "../../services/userService";

const AddImage = ({ photoUrl }) => {
  
  const handleImageUpload = (e) => {
    console.log("The file to be uploaded is", e.target.files[0]);
    uploadImageCreate(e.target.files[0])
      .catch(console.error)
      .then((res) => photoUrl(res));
  };

  return (
    <>
      <form>
        <input type='file' onChange={handleImageUpload} />
      </form>
    </>
  );
};

export default AddImage;