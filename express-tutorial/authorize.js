const authorize = (req, res, next) => {
  const { userName } = req.query;

  if (userName === "john") {
    console.log(req.query);
    res.send(`You are Authorized!!! Mr. ${userName.toUpperCase()}`);
  } else res.status(404).send("Sorry!!! You are not AUTHORIZED");
  //   next()
};

module.exports = authorize;
