const http = require("http");
const fs = require("fs/promises");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    fs.readFile("./index.html", { encoding: "utf-8" }).then((data) =>
      res.end(data)
    );
  }
  if (url === "/about") {
    fs.readFile("./about.html", { encoding: "utf-8" }).then((data) =>
      res.end(data)
    );
  }
  if (url === "/contact-me") {
    fs.readFile("./contact-me.html", { encoding: "utf-8" }).then((data) =>
      res.end(data)
    );
  } else {
    fs.readFile("./404.html", { encoding: "utf-8" }).then((data) =>
      res.end(data)
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
