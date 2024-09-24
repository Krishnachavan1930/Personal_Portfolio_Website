import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // GitHub and external link icons

const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A responsive portfolio website built using React and CSS, showcasing personal projects, skills, and contact information.',
    github: 'https://github.com/username/portfolio-website',
    live: 'https://portfolio-live-site.com',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with MERN stack (MongoDB, Express, React, Node.js) featuring a shopping cart, product catalog, and payment integration.',
    github: 'https://github.com/username/e-commerce-platform',
    live: 'https://ecommerce-live-site.com',
  },
  {
    id: 3,
    name: 'Task Manager App',
    description: 'A task management application to help users organize their tasks, set deadlines, and track progress. Built with React and Firebase for real-time updates.',
    github: 'https://github.com/username/task-manager-app',
    live: 'https://task-manager-live-site.com',
  },
  {
    id: 4,
    name: 'Weather Dashboard',
    description: 'A weather dashboard that displays real-time weather data for any location using the OpenWeather API. Built with React and responsive design for mobile and desktop.',
    github: 'https://github.com/username/weather-dashboard',
    live: 'https://weather-dashboard-live-site.com',
  },
  {
    id: 5,
    name: 'Social Media App',
    description: 'A social media platform where users can post updates, follow other users, and interact with posts. Built using React and Node.js, with MongoDB for database storage.',
    github: 'https://github.com/username/social-media-app',
    live: 'https://social-media-live-site.com',
  },
  {
    id: 6,
    name: 'Blog Platform',
    description: 'A blogging platform where users can write, edit, and publish posts. Includes authentication, user profiles, and comment functionality. Built using Django and React.',
    github: 'https://github.com/username/blog-platform',
    live: 'https://blog-platform-live-site.com',
  },
  {
    id: 7,
    name: 'Movie Search App',
    description: 'A movie search application built with React that uses the OMDB API to fetch details about movies, including ratings, summaries, and posters.',
    github: 'https://github.com/username/movie-search-app',
    live: 'https://movie-search-live-site.com',
  },
  {
    id: 8,
    name: 'Fitness Tracker',
    description: 'A fitness tracker app that allows users to log workouts, track progress, and set goals. Built using React Native for cross-platform mobile compatibility.',
    github: 'https://github.com/username/fitness-tracker',
    live: 'https://fitness-tracker-live-site.com',
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
