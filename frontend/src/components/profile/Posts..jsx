import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const user = localStorage.getItem("user");
  const getPosts = async () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/posts/user/${id}`, {
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
      .catch((e) => {
        console.log(e);
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

export default Posts;
