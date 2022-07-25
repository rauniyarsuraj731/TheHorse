import React, { useState } from "react";
// import {axios} from "axios";

const Signup = () => {
  const [formdata, setFormdata] = useState({});
  console.log(formdata);
  const handleData = (e) => {
    const { name, value } = e.target;

    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleData}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleData}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleData}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleData}
      />
      <button
        onClick={() => {
          fetch("https://horseloginbackend.herokuapp.com/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
          alert("User Signup Successfull ");
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
