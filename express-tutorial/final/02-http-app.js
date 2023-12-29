// console.log("Express Tutorial");

// A Website works on the concept of request and response.
// Backend or this "app.js" acts as a server for the website.
// A server is a machine(computer) which is online 24/7 waiting for requests and fulfilling them.
// A user makes a "request" when you enter the url in the browser which is receives by the server and according to the response, it delivers a appropriate "response". In our case the response is displayed to the user.
// A request(req) object contains pretty useful stuff like url, method, headers, body etc.
// When sending a response back you should add headers to the res object as it helps the browner to understand the data you are sending
// Without express, we have to write such a lengthy and complex code for simply loading a website.
let http = require("http");
let { readFileSync } = require("fs");

const htmlRes = readFileSync("./navbar-app/index.html");
const stylesRes = readFileSync("./navbar-app/styles.css");
const jsRes = readFileSync("./navbar-app/browser-app.js");
const logoRes = readFileSync("./navbar-app/logo.svg");

let server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("request received!!!!!");
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    //   res.writeHead(200, { "content-type": "text/plain" });
    res.write(htmlRes);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylesRes);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(jsRes);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logoRes);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Oops!!! No Content</h1>`);
    res.end();
  }
});

server.listen(5000);
