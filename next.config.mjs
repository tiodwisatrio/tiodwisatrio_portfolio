// import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimization mode
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // CSS & JS optimization
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Modern browser target to reduce bundle size
  transpilePackages: [
    "three",
    "three-globe",
    "@react-three/fiber",
    "@react-three/drei",
  ],

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev && !isServer) {
      // Enable tree-shaking for better dead code elimination
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for react/react-dom
            framework: {
              name: "framework",
              chunks: "all",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Separate chunk for three.js and 3D libraries
            three: {
              name: "three",
              test: /[\\/]node_modules[\\/](three|three-globe|@react-three)[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            // Separate chunk for framer-motion
            animations: {
              name: "animations",
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              priority: 25,
              reuseExistingChunk: true,
            },
            // Common vendor chunk
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name: "lib",
              priority: 20,
              minChunks: 2,
              reuseExistingChunk: true,
            },
            // Commons chunk for shared code
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 10,
            },
          },
        },
      };
    }
    return config;
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "framer-motion",
      "react-icons",
      "@react-three/fiber",
      "@react-three/drei",
      "three",
    ],
  },
};

// Temporarily disable Sentry during build due to network issues
export default nextConfig;

// export default withSentryConfig(
//   nextConfig,
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options

//     // Suppresses source map uploading logs during build
//     silent: true,
//     org: "javascript-mastery",
//     project: "javascript-nextjs",

//     // Disable source map upload to prevent build failures
//     disableServerWebpackPlugin: true,
//     disableClientWebpackPlugin: true,
//   },
//   {
//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: false,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size) - DISABLE for modern browsers
//     transpileClientSDK: false,

//     // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//     // This can increase your server load as well as your hosting bill.
//     // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//     // side errors will fail.
//     // tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,

//     // Enables automatic instrumentation of Vercel Cron Monitors.
//     // See the following for more information:
//     // https://docs.sentry.io/product/crons/
//     // https://vercel.com/docs/cron-jobs
//     automaticVercelMonitors: true,
//   }
// );
