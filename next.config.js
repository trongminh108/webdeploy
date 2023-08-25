/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webdeploy',
    pageExtensions: [
        'page.tsx',
        'page.ts',
        'page.jsx',
        'page.js',
        'page.md',
        'page.mdx',
    ],
};

module.exports = nextConfig;
