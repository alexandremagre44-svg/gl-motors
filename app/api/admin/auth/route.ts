export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // 🔒 logs temporaires (à enlever après)
    console.log("AUTH CHECK");
    console.log("email recv :", email);
    console.log("email env  :", adminEmail);
    console.log("pass recv  :", password);
    console.log("pass env   :", adminPassword);

    if (
      email.trim() !== adminEmail ||
      password.trim() !== adminPassword
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("AUTH ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
