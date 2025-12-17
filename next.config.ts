import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
  },
};

export default nextConfig;
