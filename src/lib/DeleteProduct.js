"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteProduct = ({ id }) => {
  const router = useRouter();

  const deleteRecord = async () => {
    let response = await fetch("http://localhost:3000/api/products/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response.success) {
      alert("Product Deleted");
      router.push("/products");
    }
  };
  return (
    <div className="border w-fit flex justify-center items-center">
      <button onClick={deleteRecord}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
