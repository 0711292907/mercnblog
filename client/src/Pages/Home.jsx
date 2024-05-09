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
            <a href="/PostList">See All Posts</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to My Blog!</h2>
        <p>
          Hi am Ratshikhopha Murangi  A software Developer student , Come have a ride  on
          my personal blog website this is were i share all about my dialy life routines. Trust me
          once you start reading my posts you'll definetly be hooked for life 
          I hope u enjoy the ride cheers .
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