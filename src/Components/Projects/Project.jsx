import React from 'react';
import './Project.css';

const MyProjects = () => {
  const projects = [
    {
      title: 'College Navigator',
      description: 'A college search platform developed using the MERN stack to provide detailed information about educational institutions.',
      technologies: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      github: 'https://github.com/yourusername/college-navigator',
      live: 'https://your-college-navigator.com',
    },
    {
      title: 'Task Management App',
      description: 'A task management web application with real-time updates for creating and managing tasks efficiently.',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/task-management-app',
      live: 'https://your-task-app.com',
    },
    {
      title: 'Chatting Application',
      description: 'A real-time chatting application using React.js, CSS, and the Gemini API for seamless communication.',
      technologies: ['React.js', 'CSS', 'Gemini API'],
      github: 'https://github.com/yourusername/chatting-application',
      live: 'https://your-chat-app.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Vite, React.js, and CSS to showcase my skills and projects.',
      technologies: ['Vite', 'React.js', 'CSS'],
      github: 'https://github.com/yourusername/portfolio-website',
      live: 'https://your-portfolio-website.com',
    },
    {
      title: 'Spotify Website Clone',
      description: 'A responsive Spotify website clone built using HTML and CSS.',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/yourusername/spotify-clone',
      live: 'https://your-spotify-clone.com',
    },
    {
      title: 'Digital Clock',
      description: 'A simple digital clock built using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/digital-clock',
      live: 'https://your-digital-clock.com',
    },
  ];

  const handleCardClick = (github) => {
    window.open(github, '_blank');
  };

  const handleLiveClick = (e, live) => {
    e.stopPropagation();
    if (live) {
      window.open(live, '_blank');
    }
  };

  return (
    <section className="my-projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => handleCardClick(project.github)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              {project.live && (
                <button 
                  className="live-link"
                  onClick={(e) => handleLiveClick(e, project.live)}
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
