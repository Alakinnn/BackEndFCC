const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our HTTP section");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about section of the page");
  }
  res.end(
    `
    <h1>Oops</h1>
    <p>We cant seem to find the page that you are finding <a href="/">please go back to the main menu</a></p>
    `
  );
});

server.listen(5500);
