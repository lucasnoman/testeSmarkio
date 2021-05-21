const express = require("express");
const routes = require("./routes.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //habilita recebimento em JSON dos clients http
app.use(routes);

// notFound
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

// middleware catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(3333, () => console.log("🌐 server is running"));
