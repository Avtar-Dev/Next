// catch all api routes

import { NextResponse } from "next/server";

export async function GET(req, con) {
  const studentDetails = con.params.student;

  return NextResponse.json({ result: studentDetails }, { status: 200 });
}
