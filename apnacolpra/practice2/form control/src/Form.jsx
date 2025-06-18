import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("Hema");
  let [userName, setUserName] = useState("Hema123");
  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };
  let handleuserNameChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <>
      <form className="" action="" method="">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="name"
          placeholder="Enter Full Name"
          className=""
          value={fullName}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="name"
          placeholder="Enter User Name"
          className=""
          value={userName}
          onChange={handleuserNameChange}
        />
        <br />
        <button className="">Submit</button>
      </form>
    </>
  );
}
