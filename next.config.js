/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webdeploy',
    assetPrefix: '/webdeploy/',
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
