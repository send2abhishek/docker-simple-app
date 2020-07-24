const app = require("./index");
const http = require("http");
const server = http.createServer(app);
const port = 4000;
server.listen(port, () => {
  console.log("App is listining at port ", port);
});
