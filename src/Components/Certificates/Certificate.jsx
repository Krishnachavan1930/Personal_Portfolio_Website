import React from 'react';
import './Certificate.css'; // Import the CSS file

const MyBlogs = () => {
  const blogs = [
    {
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt: "Explore the upcoming trends and technologies that will shape the web development landscape in 2024.",
      date: "March 15, 2024",
      readTime: "5 min read",
      link: "/blog/future-of-web-development-2024"
    },
    {
      title: "Mastering React Hooks: A Comprehensive Guide",
      excerpt: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
      date: "February 28, 2024",
      readTime: "8 min read",
      link: "/blog/mastering-react-hooks"
    },
    {
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn best practices for creating robust and scalable APIs using Node.js and Express.",
      date: "February 10, 2024",
      readTime: "6 min read",
      link: "/blog/scalable-apis-nodejs-express"
    },
    {
      title: "Optimizing Website Performance: A Developer's Guide",
      excerpt: "Discover techniques and tools to improve your website's loading speed and overall performance.",
      date: "January 22, 2024",
      readTime: "7 min read",
      link: "/blog/optimizing-website-performance"
    }
  ];

  return (
    <section className="my-blogs">
      <h2>My Blog Posts</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-read-time">{blog.readTime}</span>
            </div>
            <a href={blog.link} className="read-more-btn">Read More</a>
          </article>
        ))}
      </div>
      <a href="/blog" className="view-all-btn">View All Posts</a>
    </section>
  );
};

export default MyBlogs;
