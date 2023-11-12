/** @type {import('next').NextConfig} */
const withNextEnv = require('next-env');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextEnv({
  env: {
    defaultEnvFile: '.env',
    development: {
      envFile: '.env.development'
    },
    production: {
      envFile: '.env.production'
    }
  }
})(nextConfig);
