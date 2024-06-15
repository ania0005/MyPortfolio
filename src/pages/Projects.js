// pages/Projects.jsx
import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../components/helpers/ProjectList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              skills={project.skills}
              siteLink={project.siteLink}
              gitHubLink={project.gitHubLink}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;

