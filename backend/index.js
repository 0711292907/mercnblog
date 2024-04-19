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



app.post("/posts", (req, res) => {
  const query = "INSERT INTO posts(`title`, `descr`, `user_name`) VALUES (?)";

  const values = [
    "Good day",
    "ufhgfgfhgrhghuguhghugr",
    "Gift"

  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8800, () => {
    console.log("Connected to backend.");
  });