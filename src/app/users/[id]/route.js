import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userData = user.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    userData == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();

  payload.id = content.params.id;

  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      {
        result: "request data is not valid",
        success: false,
      },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { result: payload, success: true },
      { status: 200 }
    );
  }
}

export async function DELETE(request, content) {
  const id = content.params.id;

  if (id) {
    return NextResponse.json(
      {
        result: "User deleted",
        success: true,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        result: "Internal error please try later",
        success: false,
      },
      { status: 400 }
    );
  }
}
