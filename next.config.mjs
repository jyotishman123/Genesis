/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'cdn.hashnode.com', protocol: 'https' },
        { hostname: 'img.freepik.com', protocol: 'https' },
        { hostname: 'avatars.githubusercontent.com', protocol: 'https' },

        // Add more patterns as needed
      ],
    },
  };
  
  export default nextConfig;
  
