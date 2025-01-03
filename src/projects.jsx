import React from 'react';
import './Project.css'; // Import the CSS file

// Create a functional component to display projects
const Projects = () => {
  // Data for the projects
  const projectData = [
    {
      id: 1,
      title: 'Immomarkt',
      description: 'A platform for buying and renting houses, featuring an intuitive user interface.',
      technologies: ['React', 'CSS'],
      link: 'https://immogit.vercel.app',
      image: 'immoo.png',
    },
    {
      id: 2,
      title: 'Ghassla',
      description: 'An application for booking car washing services with ease.',
      technologies: ['React', 'CSS'],
      link: 'https://ghassla.vercel.app',
      image: 'ghassla.png',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">MY PROJECTS</h2>
      <div className="projects-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;