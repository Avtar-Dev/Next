import React from "react";

async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/users/${id}`);
  data = await data.json();
  return data.result;
}

const page = async ({ params }) => {
  const user = await getUsers(params.userid);

  console.log("user", user);

  return user === "No Data Found" ? (
    <div>User not found</div>
  ) : (
    <div>
      <h2>User Details</h2>
      <h4>Name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Id: {user.id}</h4>
    </div>
  );
};

export default page;
