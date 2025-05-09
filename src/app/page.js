"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    const result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
  };
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
      {/* <h1>Events</h1>
      <button className="bg-amber-900" onClick={() => alert("hello")}>
        click
      </button>
      <button className="bg-amber-900" onClick={() => router.push("/login")}>
        go login
      </button>
      <Link href="/login">go to login</Link>
      <Link href="/about">go to about</Link>
      <Link href="/studentList">StudentList</Link> */}
      {/* ............................................................ */}
      {/* <Link href="/products" className="font-bold border p-2 mt-3">
        Products
      </Link>
      <Link href="/addproduct" className="font-bold border p-2">
        Add Products
      </Link> */}
      {/* ............................................................ */}

      <h1 className="font-bold text-2xl mt-3">Upload Image</h1>
      <form onSubmit={submitForm}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="border p-2"
        />
        <button
          type="submit"
          className="border ml-3 rounded-md p-2 bg-rose-600 cursor-pointer">
          Upload Image
        </button>
      </form>
    </main>
  );
}
