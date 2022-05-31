import React, { useState, useEffect } from "react";
import "./profile.css";
import Comment from "./Comment";
const Comments = ({ comments }) => {
  const [viewAll, setViewAll] = useState(false);
  const [viewing, setViewing] = useState([...comments.slice(-2)]);

  const determineCommentsToShow = () => {
    if (viewAll) {
      setViewing(comments);
    } else {
      setViewing([...comments.slice(-2)]);
    }
  };
  useEffect(() => {
    determineCommentsToShow();
  }, [viewAll, comments]);

  return (
    <div>
      <h5>Comments</h5>
      {viewing.map((comment) => (
        <Comment comment={comment} />
      ))}
      {comments.length > 2 ? (
        <span
          onClick={() => setViewAll(!viewAll)}
          className="view_all_comments"
        >
          {viewAll ? "View less comments" : "View all comments"}
        </span>
      ) : null}
    </div>
  );
};

export default Comments;
