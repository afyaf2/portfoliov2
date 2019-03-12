import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Mondrian from 'components/Mondrian';

const About = ({ data }) => (
  <Layout pageTitle={data.aboutJson.title}>
    <div className="page-title">
      <h1>
        A little bit <br className="rw-break" /><em>about me.</em>
      </h1>
    </div>
    <Mondrian gridContent={data.aboutJson} />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      header
      image {
        childImageSharp {
          fixed(height: 300, width: 300, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      tools {
        title
      }
      tech {
        title
      }
      links {
        title
        url
      }
    }
  }
`;
