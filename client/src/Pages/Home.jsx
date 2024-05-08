import React from 'react';
import '../Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="Home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="https://logos.flamingtext.com/Word-Logos/Blog-design-sketch-name.png" alt="Blog Logo"/>
          <h1>My Awesome Blog</h1>
        </div>
        <ul className="navbar-nav">
          <li>
            <a href="/CreatePost">Create Post</a>
          </li>
          <li>
            <a href="/posts">See All Posts</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to My Blog!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
          pulvinar lorem quis lorem iaculis vehicula.
        </p>
      </section>

      {/* Featured Posts Section (Optional) */}
      <section className="featured-posts">
        <h2>Featured Posts</h2>
        {/* Replace with logic to fetch and display featured posts */}
        <ul>
          <li>
            <a href="/post/1">Post Title 1</a>
          </li>
          <li>
            <a href="/post/2">Post Title 2</a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Awesome Blog</p>
      </footer>
    </div>
  );
};

export default Home;