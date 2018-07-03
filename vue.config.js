module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://lagou:3000',
        changeOrigin: true
      }
    }
  }
}
