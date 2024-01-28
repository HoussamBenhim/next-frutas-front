/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/products/all', // Match any request starting with '/api/products'
                destination: 'http://localhost:8081/api/products/all', // Replace with your API endpoint
            },
        ];
    },
}

module.exports = nextConfig
