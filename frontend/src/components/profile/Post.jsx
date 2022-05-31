import React, { useState, useEffect, useRef } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Post = (details) => {
  const ref = useRef(null);
  const postDetails = details.details;
  const [likes, setLikes] = useState(postDetails.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(postDetails.comments);
  const [comment, setComment] = useState("");
  const user = localStorage.getItem("user");
  const userId = localStorage.getItem("userId");
  const id = postDetails.id;

  const removeLike = (like) => {
    return like.liker !== userId;
  };

  const haveLiked = () => {
    for (const like of likes) {
      if (like.liker === userId) {
        setLiked(true);
      }
    }
  };
  const likePost = async () => {
    if (!liked) {
      setLikes([...likes, { liker: userId }]);
      const response = fetch(
        `${process.env.REACT_APP_BASE_URL}/api/posts/like/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      const newLikes = likes.filter(removeLike);
      setLikes(newLikes);
      setLiked(false);
      fetch(`${process.env.REACT_APP_BASE_URL}/api/posts/like/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const uploadComment = async () => {
    if (comment !== "") {
      setComments([
        ...comments,
        {
          text: comment,
          owner: {
            image: localStorage.getItem("user"),
            name: localStorage.getItem("user_name"),
          },
        },
      ]);
      fetch(`${process.env.REACT_APP_BASE_URL}/api/posts/comment/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          text: comment,
          post_id: postDetails.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  useEffect(() => {
    haveLiked();
  }, [likes]);

  const handleCommentClick = () => {
    ref.current.focus();
  };
  return (
    <ListGroup as="ul" className="mt-4">
      <ListGroupItem as="li">
        <div className="timeline-body">
          <div className="timeline-header">
            <img
              src={`${process.env.REACT_APP_BASE_URL}${postDetails.owner.image}`}
              alt="post image"
              className="rounded-circle userimage"
            />

            <div>
              <span className="username d-block">
                <a href={`/users/${postDetails.owner.id}`}>
                  {postDetails.owner.name}
                </a>
              </span>
              <span className="post-date">{postDetails.created}</span>
            </div>
          </div>
          {/* end of header */}
          <div className="timeline-content">
            <p>{postDetails.text}</p>
            <div className="w-100 post-image-holder">
              {postDetails.image ? (
                <img
                  src={`${process.env.REACT_APP_BASE_URL}${postDetails.image}`}
                  alt="Admin"
                  className="post-image"
                />
              ) : null}
            </div>
          </div>
          <div className="post-stats">
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="comment-icon stat-icon me-1"
              />
              {likes.length}
            </span>
            <span>{comments.length} Comments</span>
          </div>
          <div className="timeline-footer">
            <span
              className={`footer-btn ${liked ? "liked" : "not-liked"}`}
              onClick={likePost}
            >
              <FontAwesomeIcon
                icon={faThumbsUp}
                className={`comment-icon stat-icon ${
                  liked ? "liked" : "not-liked"
                }`}
              />
              Like
            </span>
            <span className="footer-btn" onClick={handleCommentClick}>
              <FontAwesomeIcon
                icon={faComment}
                className="comment-icon stat-icon"
              />
              Comment
            </span>
          </div>
          <Comments comments={comments} />
          <div className="timeline-comment-box">
            <div className="user">
              <img
                src={`${process.env.REACT_APP_BASE_URL}${user}`}
                alt="Admin"
                className="rounded-circle userimage"
              />
            </div>
            <div className="input">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-corner"
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={handleCommentChange}
                  ref={ref}
                />
                <span className="input-group-btn p-l-10">
                  <button
                    className="btn btn-primary f-s-12 rounded-corner"
                    type="button"
                    onClick={uploadComment}
                  >
                    Comment
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Post;
