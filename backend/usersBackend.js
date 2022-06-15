import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";


const app = express();
const PORT = "https://web-api-test1.herokuapp.com";

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(PORT);