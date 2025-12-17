import { NextRequest, NextResponse } from "next/server";
import { getFirebaseStorage } from "@/lib/firebase";

// Force Node.js runtime for Vercel compatibility
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Get Firebase Storage instance
    const storage = getFirebaseStorage();
    const bucket = storage.bucket();

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `vehicles/${timestamp}-${file.name}`;

    // Upload to Firebase Storage
    const fileRef = bucket.file(filename);
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
      },
      public: true, // Make file publicly accessible
    });

    // Make the file public and get the public URL
    await fileRef.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    return NextResponse.json({
      url: publicUrl,
      filename: filename,
    });
  } catch (e) {
    console.error('Upload error:', e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
