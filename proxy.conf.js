const PROXY_CONFIG = [{
  context: [
    "/api/"
  ],
  // target: "https://localhost:8888",
  target: "https://chatwork-server.herokuapp.com",
  secure: false,
  changeOrigin: true
}]

module.exports = PROXY_CONFIG;
