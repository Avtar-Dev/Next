"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    if (name && price && color && company && category) {
      setName("");
      setPrice("");
      setColor("");
      setCompany("");
      setCategory("");
      let result = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({ name, price, color, category, company }),
      });
      result = await result.json();
      if (result.success) {
        alert("new product added");
      }
    } else {
      alert("all fields are neccessary");
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-4">
      <h1 className="text-3xl font-bold">Update Products</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="border w-50 p-1"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
        className="border w-50 p-1"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Color"
        className="border w-50 p-1"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company"
        className="border w-50 p-1"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category"
        className="border w-50 p-1"
      />
      <button
        className="border rounded-md p-1 bg-purple-400"
        onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default Page;
