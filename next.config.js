module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/discord',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: [
      'brandlogos.net',
      'robohash.org',
      'seeklogo.com',
      'cdn.discordapp.com'
    ]
  }
}
