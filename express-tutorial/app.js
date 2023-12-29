const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3310;

app.use(express.static("./testingFormForRequests"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is a form website");
});
app.get("/testForm", (req, res) => {
  res.send("The data is coming");
});
app.post("/testForm", (req, res) => {
  console.log(req.body);
  res.send(`Name = ${req.body.intro} Password = ${req.body.pass}`);
});
app.listen(port, () => {
  console.log(`The app is listening on ${port}`);
});
