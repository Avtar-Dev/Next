"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let productId = props.params.editproduct;

    let productData = await fetch(
      `http://localhost:3000/api/products/${productId}`
    );
    productData = await productData.json();

    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    let productId = props.params.editproduct;

    let data = await fetch("http://localhost:3000/api/products/" + productId, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, category, company }),
    });
    data = await data.json();
    if (data.result) {
      alert("Product has been updated");
      router.push("/products");
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
        onClick={updateProduct}>
        Update Product
      </button>
      <Link href={"/products"}>Go to Product List</Link>
    </div>
  );
};

export default Page;
