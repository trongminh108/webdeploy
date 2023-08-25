/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webdeploy',
    experimental: {
        runtime: 'experimental-edge',
        appDir: true,
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/test/hello-nextjs': { page: '/test/[slug]' },
            '/test/learn-nextjs': { page: '/test/[slug]' },
            '/test/deploy-nextjs': { page: '/test/[slug]' },
        };
    },
};

module.exports = nextConfig;
