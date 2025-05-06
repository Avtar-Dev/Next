import mongoose from "mongoose";
import { connectionSrt } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionSrt);

    const data = await Product.find();

    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      { result: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  // request has the data that we send from post api
  await mongoose.connect(connectionSrt);
  let payload = await request.json();
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({
    result,
    success: true,
  });
}
