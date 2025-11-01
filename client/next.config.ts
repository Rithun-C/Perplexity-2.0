import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  env: {
    NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS: '1',
  },
};

export default nextConfig;
