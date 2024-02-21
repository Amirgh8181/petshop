/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port:"5000",
              pathname:"/uploads/**"
            }
          ],
          deviceSizes:[350,640,750,828,1080,1200,1920,2048,3840,4000],
          imageSizes:[16,32,48,64,96,128,256,384],
          minimumCacheTTL:60
    }
}


module.exports = nextConfig
