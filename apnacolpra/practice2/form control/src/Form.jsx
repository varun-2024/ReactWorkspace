import { useState } from "react";

export default function Form() {
  //let [fullName, setFullName] = useState("Hema");
  //let [userName, setUserName] = useState("Hema123");
  /*   let handleNameChange = (event) => {
    setFullName(event.target.value);
  };
  let handleuserNameChange = (event) => {
    setUserName(event.target.value);
  }; */
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  let handleInputChange = (event) => {
    //const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({ fullName: "", userName: "" });
  };
  return (
    <>
      <form className="" action="" method="" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter Full Name"
          className=""
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter User Name"
          className=""
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />
        <button className="">Submit</button>
      </form>
    </>
  );
}
