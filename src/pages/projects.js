import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ProjectsContainer from './components/ProjectsContainer';

const Projects = ({ data }) => (
  <Layout pageTitle={data.projectsJson.title}>
    <div className="page-title">
      <h1>Check out <br className="rw-break" /><em>my work.</em></h1>
    </div>
    <ProjectsContainer items={data.projectsJson.projects} />
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectQuery {
    projectsJson {
      title
      projects {
        title
        role
        image
        url
        github
        tags
        tech
        tools
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
