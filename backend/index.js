// Import necessary modules
import express from "express"; // Import the Express framework
import mysql from "mysql2"; // Import the MySQL library
import cors from "cors"; // Import the CORS middleware

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost", // Database host (change to your actual database host)
  user: "root", // Database user (change to your actual username)
  password: "Mur@ngi02", // Database password (change to your actual password)
  database: "test", // Database name (change to your actual database name)
});

// Create the Express app
const app = express();

// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Define routes and handlers

// Root route: Respond with "hello"
app.get("/", (req, res) => {
  res.json("hello");
});

// Get all posts from the database
app.get("/posts", (req, res) => {
  const query = "SELECT * FROM test.posts"; // SQL query to retrieve all posts

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results); // Respond with the retrieved posts
    }
  });
});

// Create a new post
app.post("/posts", (req, res) => {
  const query = "INSERT INTO posts(`title`, `descr`, `user_name`) VALUES (?)"; // SQL query to insert a new post

  const values = [
    req.body.title, // Extract title from the request body
    req.body.descr, // Extract description from the request body
    req.body.user_name, // Extract user name from the request body
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

// Delete a post by ID
app.delete("/posts/:postId", (req, res) => {
  const postId = req.params.postId; // Extract the post ID from the URL parameter

  const deleteQuery = "DELETE FROM test.posts WHERE id = ?"; // SQL query to delete a post
  db.query(deleteQuery, [postId], (err, result) => {
    if (err) {
      console.error("Error deleting post:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ message: "Post has been deleted successfully" });
    }
  });
});

// Start the Express server on port 8800
app.listen(8800, () => {
  console.log("Connected to backend.");
});
