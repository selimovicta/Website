import React from "react";
import "./profile.css";

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="timeline-header comment-holder">
        <img
          src={`${process.env.REACT_APP_BASE_URL}${comment.owner.image}`}
          alt="Admin"
          className=" userimage"
        />

        <div>
          <span className="username d-block">
            <a href={`/users/${comment.owner.id}`}>{comment.owner.name}</a>
          </span>
          <span className="post-date">{comment.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
