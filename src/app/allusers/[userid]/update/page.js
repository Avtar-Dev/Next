"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params.userid;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/users/" + id);

    data = await data.json();

    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      const result = await response.json(); // This might be throwing
      console.log("result", result);

      if (result.success) {
        alert("Information Updated");
      } else {
        alert("Please try with valid information");
      }
    } catch (error) {
      alert("Failed to update user. Check console for details.");
    }
  };

  return (
    <div>
      <h1>Update User Detail</h1>
      <div className="flex gap-4">
        <input
          className="border"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border"
          type="age"
          value={age}
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="border"
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="border" onClick={updateUser}>
          Update User
        </button>
      </div>
    </div>
  );
};

export default Page;
