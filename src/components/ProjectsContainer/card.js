import React from 'react';
import PropTypes from 'prop-types';
import { ProjectCard, LinkIcons, IconRow } from './card.css';
import Github from '../../../content/images/icons/github-circle.svg';
import URLIcon from '../../../content/images/icons/arrow-card.svg';
import Icon from '../Mondrian/Icon.js';

const Card = ({ title, role, description, tech, url, github }) => (
  <ProjectCard className="card">
    <h2>{title}</h2>
    <h3>{role}</h3>
    <h2 className="small-subtitle">The Stack.</h2>
    <IconRow>
    {tech.map((item, i) => (
      <Icon title={item} key={i} />
    ))}
    </IconRow>

    <div
      className="project-description"
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
    <LinkIcons>
      <a href={url}>
        <URLIcon />
      </a>
      { github !== null ? <a href={github}><Github /></a> : null }
    </LinkIcons>
  </ProjectCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  tech: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  github: PropTypes.string,
};

export default Card;
