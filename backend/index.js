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


app.get("/posts", (req, res) => {
  const query = "SELECT * FROM test.posts"; 

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.listen(8800, () => {
    console.log("Connected to backend.");
  });