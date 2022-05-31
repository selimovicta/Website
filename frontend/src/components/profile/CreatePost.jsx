import React, { useState } from "react";
import UploadPostImage from "./UploadPostImage";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const createPost = async () => {
    let submitImage;
    if (image) {
      submitImage = image[0]["data_url"];
    } else {
      submitImage = "";
    }
    fetch(`${process.env.REACT_APP_BASE_URL}/api/posts/create-post/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        text: post,
        image: submitImage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="upload-post container">
      <div className="upload-post-input-holder">
        <textarea
          placeholder="Write something here...."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <div className="upload-post-footer">
          <UploadPostImage setImage={setImage} />
          <button className="btn btn-primary upload-btn" onClick={createPost}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
