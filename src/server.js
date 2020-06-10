import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "./components/App";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const initialMarkup = renderToString(<App />);
  res.render("index", { initialMarkup });
});

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
