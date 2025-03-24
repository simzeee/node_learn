import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  if (req.path === "/") {
    console.log("always runs on root");
    return res.send("<h1>root</h1>");
  }
  // For other routes, pass control to the next middleware
  next();
});

app.use("/users", (req, res, next) => {
  console.log("in the middleware again");
  res.send(` <p style="color: blue;">
    users
  </p>`);
});

app.listen(3000);
