module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/brainstorm-frontend/'
    : '/',
  outputDir: 'docs'
}