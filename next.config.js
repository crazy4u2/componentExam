/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['dev2-cfimg.bithumblive.com', 'rlyfaazj0.toastcdn.net'],
  },

  webpack(conf) {
    conf.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            // options: {
            //   svgoConfig: {
            //     plugins: [
            //       {
            //         //         removeRasterImages: false,
            //         //         removeStyleElement: false,
            //         //         removeUnknownsAndDefaults: false,
            //         // removeViewBox: false,
            //       },
            //     ],
            //   },
            // },
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['url-loader'],
      }
    );
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});
