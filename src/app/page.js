"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
      <Link href="/products">Products</Link>
      <Link href="/addproduct">Add Products</Link>
    </main>
  );
}
