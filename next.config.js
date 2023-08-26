/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    output: {
        dir: 'out',
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
