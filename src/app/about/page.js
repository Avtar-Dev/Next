import React from "react";

const page = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default page;

export const generateMetadata = () => {
  return {
    title: "About page",
  };
};
