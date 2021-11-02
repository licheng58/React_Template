// const { createProxyMiddleware } = require('http-proxy-middleware').default()

// module.exports = function (app) {
//   app.use(
//     proxy('/api/sub', {
//       target: 'http://localhost:8080',
//       changeOrigin: true,
//       secure: true, //允许https协议
//       pathRewrite: {
//         '^/api': ''
//       }
//     })
//   )
// app.use(
//   proxy('/api', {
//     target: 'http://aaa:1000',
//     changeOrigin: true,
// secure: true, //允许https协议
//     pathRewrite: {
//       '^/api': ''
//     }
//   })
// );
// app.use(
//   proxy('/xxx', {
//     target: 'http://bbb:2000',
//     changeOrigin: true,
// secure: true, //允许https协议
//     pathRewrite: {
//       '^/xxx': ''
//     }
//   })
// );
// }
