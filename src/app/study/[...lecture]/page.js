"use client";

import { useParams } from "next/navigation";
import React from "react";

const Lectures = () => {
  const params = useParams();

  console.log("Params:", params);

  return (
    <div>
      <h2>Lecture: {params.lecture[1]}</h2>
      <h2>Day: {params.lecture[0]}</h2>
      <h2>other: {params.lecture[2]}</h2>
    </div>
  );
};

export default Lectures;
