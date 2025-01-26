import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import './Graphics.css'; // Import the CSS file

function LogoDesign() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [mostViewedPosts, setMostViewedPosts] = useState([]);

  useEffect(() => {
    // Fetch recent posts (e.g., last 5 posts)
    axios
      .get('/api/posts?_limit=5&_sort=createdAt&_order=desc')
      .then((response) => {
        setRecentPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recent posts:', error);
      });

    // Fetch most viewed posts (e.g., top 5 posts by views)
    axios
      .get('/api/posts?_sort=views&_order=desc&_limit=5')
      .then((response) => {
        setMostViewedPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching most viewed posts:', error);
      });
  }, []);

  return (
    <div className="logo-design-container">
      <h1>Logo Design Page</h1>
      <p>Welcome to the Logo Design page. Customize your logo here.</p>

      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h2>Most Viewed Posts</h2>
      <ul>
        {mostViewedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogoDesign;
