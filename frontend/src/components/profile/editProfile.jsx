import React from "react";
import UploadImage from "./UploadImage";

const EditProfile = ({
  name,
  email,
  bio,
  setName,
  setPassword,
  setBio,
  setEmail,
  setImage,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Bio</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <textarea
              type="text"
              className="form-control"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Profile Picture</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <UploadImage setImage={setImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
