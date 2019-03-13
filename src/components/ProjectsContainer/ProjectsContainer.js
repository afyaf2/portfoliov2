import React from 'react';
import PropTypes from 'prop-types';
import Card from './card.js';
import { ProjectList } from './projects.css';

const ProjectsContainer = ({ items }) => (
  <div className="projects">
    <ProjectList>
      {items.map(( project, i ) => (
        <Card {...project} key={i} />
      ))}
    </ProjectList>
  </div>
)

ProjectsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsContainer;
