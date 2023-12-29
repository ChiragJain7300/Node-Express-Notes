// This module describes how to use json on our websites.
// JSON or JavaScriptObjectNotation
// JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
// Express is mostly used for generating either API(instead of a webpage we send data in form of JSON as shown below) or SSR templates(ejs)
const app = require("express")();
const { people, products } = require("./data");
const port = 5010;
const data = [
  { id: 1, name: "Chirag" },
  { id: 2, name: "Hello There" },
];

app.get("/", (req, res) => {
  res.send(`
    <h1>This is the HomePage</h1>
    <h3><a href = "/api/products/all">Products Page<a></h3>
    <h3><a href = "/api/products/Mapped-Data">Mapped Products Page<a></h3>
  `);
});
app.get("/api/products/all", (req, res) => {
  res.json(products);
});
// If You want to send some limited data fields from a object we use map function with that object
app.get("/api/products/Mapped-Data", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, desc } = product;
    return { id, name, desc };
  });
  res.json(newProducts);
});
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
/* Understand with an example shown below
  Route path: /users/:userId/books/:bookId
  Request URL: http://localhost:3000/users/34/books/8989
  req.params: { "userId": "34", "bookId": "8989" }
*/
app.get("/api/products/:prodId", (req, res) => {
  // console.log(req.params);

  //The prodId in the request is a string not a number so we have to be mindful of that
  const prodId = Number(req.params.prodId);

  const askedData = products.find((product) => product.id === prodId);
  console.log(askedData);
  if(!askedData)
    res.send("OOPS Data Not Available")
  res.json(askedData);
});
// You can also add query in the URL which can accessed through the request object
// URl - "http://localhost:5010/api/products/5/query?name=chirag&msg=helloThere"
app.get("/api/products/:prodId/query", (req, res) => {
  console.log(req.params);
  console.log(req.query);
});


app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
