/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    output: {
        value: 'server',
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
