import { NextRequest, NextResponse } from "next/server";
import { getFirebaseStorage } from "@/lib/firebase";

// Force Node.js runtime for Vercel compatibility
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    // Validate file type (only images)
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only images are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // 🔥 IMPORTANT : getFirebaseStorage() retourne DÉJÀ le bucket
    const bucket = getFirebaseStorage();

    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `vehicles/${timestamp}-${sanitizedName}`;

    const fileRef = bucket.file(filename);

    await fileRef.save(buffer, {
      contentType: file.type,
      resumable: false,
      public: true,
    });

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    return NextResponse.json({
      url: publicUrl,
      filename,
    });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
