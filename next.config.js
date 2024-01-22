/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.pexels.com',
                pathname: '**',
            }
        ],
    },
}

module.exports = nextConfig
