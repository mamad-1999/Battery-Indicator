const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    workboxOptions: {
        disableDevLogs: true,
    },
    extendDefaultRuntimeCaching: (defaultRuntimeCaching) => {
        // Add a new caching strategy for a specific URL pattern
        defaultRuntimeCaching.push({
            urlPattern: /^https?.*/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'api-data-cache',
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
            },
        });
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other options you like
};

module.exports = withPWA(nextConfig);
