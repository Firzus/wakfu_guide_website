/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'https',
                hostname: 'wakfu-guide-api-cckfj.ondigitalocean.app',
            }
        ],
    },
}

module.exports = nextConfig