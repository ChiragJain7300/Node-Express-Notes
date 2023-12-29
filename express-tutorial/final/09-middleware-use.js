// Middleware can be understood as functions(modules) which process the information and instructions received through the requests and send the responses as they can access the req and res objects because of express

const app = require("express")();
const port = 3010;
const logger = require("./logger");
const authorize = require("./authorize");

// The above "logger" function is a middleware which takes req,res, next, etc. as arguments so it can access these objects.
// Use "next()" at end of each middleware or send a response
//  req => middleware => res
app.use([logger, authorize]);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(port, () => {
  console.log("Server is listening on port 5000....");
});
