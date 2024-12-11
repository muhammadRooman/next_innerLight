/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    images: {
        domains: ['innerlightbuck.s3.amazonaws.com'], // Add the domain for your S3 bucket
      },
};

export default withNextIntl(nextConfig);
