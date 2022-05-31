import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../profile/Post";

const HomePosts = () => {
  const [posts, setPosts] = useState([]);
  const user = localStorage.getItem("user");
  const getPosts = async () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/posts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("userId");
          localStorage.removeItem("user_name");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <Post details={post} key={post.id} user={user} />
      ))}
    </Container>
  );
};

export default HomePosts;
