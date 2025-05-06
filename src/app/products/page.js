import React from "react";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

const Page = async () => {
  const products = await getProducts();
  console.log("products", products);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products List</h1>
      <table className="table-auto border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Color</th>
            <th className="border border-gray-400 px-4 py-2">Company</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((items, i) => {
            return (
              <tr key={i}>
                <th className="border border-gray-400 px-4 py-2 font-medium">
                  {items?.name}
                </th>
                <th className="border border-gray-400 px-4 py-2 font-medium">
                  {items?.price}
                </th>
                <th className="border border-gray-400 px-4 py-2 font-medium">
                  {items?.color}
                </th>
                <th className="border border-gray-400 px-4 py-2 font-medium">
                  {items?.company}
                </th>
                <th className="border border-gray-400 px-4 py-2 font-medium">
                  {items?.category}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
