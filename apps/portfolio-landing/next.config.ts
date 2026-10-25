import type { NextConfig } from "next";
import os from "node:os";

// Detect local IPv4 addresses to automatically allow them in development mode
function getLocalDevOrigins(): string[] {
  const origins = [
    "localhost",
    "127.0.0.1",
    "*.local",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.17.*.*",
    "172.18.*.*",
    "172.19.*.*",
    "172.2*.*.*",
    "172.3*.*.*",
  ];

  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === "IPv4" && !iface.internal) {
          origins.push(iface.address);
        }
      }
    }
  } catch {
    // fallback to wildcard patterns if network query fails
  }

  return Array.from(new Set(origins));
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalDevOrigins(),
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

