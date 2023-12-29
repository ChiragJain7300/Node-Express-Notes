const http = require("http");

http
  .createServer((req, res) => {
    //   console.log(req.url);
    if (req.url === "/") {
      res.end("Welcome to My Website");
    } else if (req.url === "/about") {
      res.end("This is the about page");
    } else {
      res.end(`
        <h1>Oops!!! The page is not available</h1>
        <a href = '/'>Back Home<a>`);
    }
  })
  .listen(5000);
