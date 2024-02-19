/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.NEXT_PUBLIC_API, // Pass through env variables
      },

};

export default nextConfig;
