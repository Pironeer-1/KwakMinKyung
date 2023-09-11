import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} content={comment.comment} />;
      })}
    </div>
  );
};

export default CommentList;

const comments = [
  { name: "Kwak", comment: "You may also call me Kwak" },
  {
    name: "Kim",
    comment: "Never call me Kwak",
  },
  {
    name: "Lee",
    comment: "Don't you dare call me Kwak",
  },
];
