/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    output: {
        value: 'export',
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
