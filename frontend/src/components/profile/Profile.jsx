import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts.";
import "./profile.css";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const user_id = localStorage.getItem("userId");

  const getUser = async () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/accounts/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <UserInfo user={user} />
      {user_id === user.id ? <CreatePost /> : null}
      <Posts />
    </div>
  );
};

export default Profile;
