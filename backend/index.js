import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mur@ngi02",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello");
});


app.listen(8800, () => {
    console.log("Connected to backend.");
  });