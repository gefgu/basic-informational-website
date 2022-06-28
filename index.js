const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    try {
      const data = fs.readFileSync("./index.html", { encoding: "utf-8" });
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  } else if (url === "/about") {
    try {
      const data = fs.readFileSync("./about.html", { encoding: "utf-8" });
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  } else if (url === "/contact-me") {
    try {
      const data = fs.readFileSync("./contact-me.html", { encoding: "utf-8" });
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const data = fs.readFileSync("./404.html", { encoding: "utf-8" });
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  }
});

server.listen(8080, () => {
  console.log(`Server running!`);
});
