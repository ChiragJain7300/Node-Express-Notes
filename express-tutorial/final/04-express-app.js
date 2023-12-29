const exp = require("express");
const path = require("path");
const app = exp();
const port = 3000;
const dataToSend = [{ name: "Chirag Jain" }, { name: "Chirag Jain" }];
/* Important methods of express
 
    app.get()
    app.post()
    app.put()
    app.delete()
    app.listen()
    app.use()
    app.all()
*/
// Express also provides us methods so that we can provide all static files without indivisually sending catering to each and every request for a request.
app.use(exp.static("./public"));

app.get("/", (req, res) => {
  //   res.status(200).send("Hello World!");
  // res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
app.get("/about", (req, res) => {
  res.status(200).send("This is the about page");
});
app.all("*", (req, res) => {
  res.status(404).send("Oops Webpage not available");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
