import express from "express";
import mysql from "mysql2";
import cors from "cors";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mur@ngi02",
  database: "test",
});


// Create the Express app
const app = express();

//cors
app.use(cors());
// Define your routes and middleware here
app.use(express.json());


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
    req.body.title,
    req.body.descr,
    req.body.user_name,
  ];

  db.query(query, [values], (err, data) => {
    if (err) {
      console.error("Error inserting post:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ message: "Post has been updated successfully" });
    }
  });
});

app.delete("/posts/:postId", (req, res) => {
  const postId = req.params.postId; // Extract the post ID from the URL parameter

  const deleteQuery = "DELETE FROM test.posts WHERE id = ?";
  db.query(deleteQuery, [postId], (err, result) => {
    if (err) {
      console.error("Error deleting post:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ message: "Post has been deleted successfully" });
    }
  });
});


app.listen(8800, () => {
    console.log("Connected to backend.");
  });