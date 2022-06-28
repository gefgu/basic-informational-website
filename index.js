const http = require("http");
const fs = require("fs/promises");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./index.html", { encoding: "utf-8" }).then((data) =>
    res.end(data)
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
