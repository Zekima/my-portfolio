import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from '@payloadcms/next/withPayload'

const withNextIntl = createNextIntlPlugin();

const nextConfig: import('next').NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
}

export default withNextIntl(withPayload(nextConfig));