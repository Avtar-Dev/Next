"use client";

import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();
    if (response.success) {
      alert("new user added");
    } else {
      alert("data not found");
    }
  };
  return (
    <div className="flex flex-col gap-4 relative justify-center items-center top-4">
      <h1 className="border border-4-black w-40 flex items-center justify-center">
        Add New User
      </h1>
      <input
        type="text"
        placeholder="Enter name"
        className="border border-4-black w-90"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        className="border border-4-black w-90"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        className="border border-4-black w-90"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="border border-4-black w-30" onClick={addUser}>
        Add User
      </button>
    </div>
  );
};

export default Page;
