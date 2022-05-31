import React, { useState, useEffect } from "react";
import EditProfile from "./editProfile";
import { Button, Modal } from "react-bootstrap";

const UserInfo = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
    setEmail(user.email);
  }, [user.name, user.bio, user.email]);
  const user_id = localStorage.getItem("userId");

  const handleSubmit = async () => {
    let submitImage;
    if (image) {
      submitImage = image[0]["data_url"];
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/accounts/update/${user_id}/`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: name,
            email: email,
            bio: bio,
            image: submitImage,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.removeItem("user");
          localStorage.setItem("user", data.user.image);
          setShow(false);
          window.location.reload(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/accounts/update/${user_id}/`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: name,
            email: email,
            bio: bio,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.removeItem("user");
          localStorage.setItem("user", data.user.image);
          setShow(false);
          window.location.reload(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div class="row gutters-sm p-4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfile
            name={name}
            bio={bio}
            email={email}
            setName={setName}
            setBio={setBio}
            setEmail={setEmail}
            setImage={setImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src={`${process.env.REACT_APP_BASE_URL}${user.image}`}
                alt="Admin"
                class="rounded-circle"
                width="150"
                height="150"
              />
              <div class="mt-3">
                <h4>{user.name}</h4>
                <p class="text-muted font-size-sm">{user.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">{user.name}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">{user.email}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Bio</h6>
              </div>
              <div class="col-sm-9 text-secondary">{user.bio}</div>
            </div>
            <hr />
            {user_id === user.id ? (
              <div class="row">
                <div class="col-sm-12">
                  <Button
                    class="btn btn-info "
                    target="__blank"
                    onClick={handleShow}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
