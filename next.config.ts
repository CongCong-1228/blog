import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    distDir: 'blog',
    basePath: '/blog',
    trailingSlash: true,
    images: { unoptimized: true }
};

export default nextConfig;
