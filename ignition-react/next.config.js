module.exports = {
    async rewrites() {
      return [
        {
          source: '/sensors/:path*',
          destination: 'http://ignitiondashboard.salford.ac.uk:8080/api/sensors/:path*' // Proxy to Backend
        }
      ]
    }
  }