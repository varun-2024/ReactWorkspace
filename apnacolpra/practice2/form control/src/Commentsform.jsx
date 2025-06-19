import { useState } from "react";
import { useFormik } from "formik";

export default function Commentsform({ addComment }) {
  /* let [formData, setFormdata] = useState({
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
  }; */
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Cannot be Empty";
    }
    if (!values.rating) {
      errors.rating = "Rating Cannot be Empty";
    }
    if (!values.comment) {
      errors.comment = "Comment Cannot be Empty";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      rating: "",
      comment: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      addComment(values);
      resetForm();
    },
  });
  return (
    <>
      <h4 className="">Give a Comment</h4>
      <form className="" action="" method="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className=""
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.rating ? (
          <p style={{ color: "red" }}>{formik.errors.rating}</p>
        ) : null}
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter your comment"
          className=""
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.comment ? (
          <p style={{ color: "red" }}>{formik.errors.comment}</p>
        ) : null}
        <br />
        <button className="" type="submit">
          Add Comment
        </button>
      </form>
    </>
  );
}
