import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import './Graphics.css'; // Import the CSS file

function IconDesign() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [mostViewedPosts, setMostViewedPosts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/posts?_limit=5&_sort=createdAt&_order=desc')
      .then((response) => {
        setRecentPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recent posts:', error);
      });

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
    <div className="icon-design-container">
      <h1>Icon Design Page</h1>
      <p>Welcome to the Icon Design page. Create your icons here.</p>

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

export default IconDesign;