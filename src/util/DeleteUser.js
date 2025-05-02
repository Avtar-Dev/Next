"use client";

import React from "react";

const DeleteUser = ({ id }) => {
  const userid = id;

  const deleteUser = async () => {
    const response = await fetch("http://localhost:3000/users/" + userid, {
      method: "delete",
    });

    const result = await response.json();

    if (result.success) {
      alert("User is deleted");
    } else {
      alert("Please try again, user not deleted");
    }
  };

  return (
    <div>
      <button className="border" onClick={deleteUser}>
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;
