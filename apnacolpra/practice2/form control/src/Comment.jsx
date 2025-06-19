import { useState } from "react";
import Commentsform from "./Commentsform.jsx";

export default function Comment() {
  let [comments, setComments] = useState([]);
  let addComment = (newComment) => {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  };
  return (
    <>
      <Commentsform addComment={addComment} />
      <h3 className="">All Comments</h3>
      {comments.map((comment, idx) => (
        <div className="" key={idx}>
          <h4>{comment.username}</h4>
          <p>{comment.rating}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </>
  );
}
