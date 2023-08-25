/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webdeploy',
    experimental: {
        runtime: 'experimental-edge',
        appDir: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
