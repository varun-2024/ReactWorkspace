import { useState } from "react";
import { useFormik } from "formik";

export default function Commentsform({ addComment }) {
  let [formData, setFormdata] = useState({
    username: "",
    rating: "",
    comment: "",
  });

  let handleOnChange = (e) => {
    setFormdata((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  let handleSubmit = (e) => {
    console.log("formData", formData);
    addComment(formData);
    e.preventDefault();
    setFormdata({
      username: "",
      rating: "",
      comment: "",
    });
  };
  return (
    <>
      <h4 className="">Give a Comment</h4>
      <br />
      <form className="" action="" method="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className=""
          value={formData.username}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Enter your rating"
          className=""
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter your comment"
          className=""
          value={formData.comment}
          onChange={handleOnChange}
        />
        <br />
        <button className="">Add Comment</button>
      </form>
    </>
  );
}
