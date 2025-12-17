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

    // Validate file type (only images)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: "Invalid file type. Only images are allowed (JPEG, PNG, WebP, GIF)" 
      }, { status: 400 });
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: "File too large. Maximum size is 10MB" 
      }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Get Firebase Storage instance
    const storage = getFirebaseStorage();
    const bucket = storage.bucket();

    // Generate unique filename with sanitized original name
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `vehicles/${timestamp}-${sanitizedName}`;

    // Upload to Firebase Storage
    const fileRef = bucket.file(filename);
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
      },
      public: true, // Make file publicly accessible for vehicle images
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
