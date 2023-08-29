/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
