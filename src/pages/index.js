import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import Services from 'components/services';
import ServiceList from 'components/ServiceList';
import FormContainer from 'components/FormContainer';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout pageTitle={data.homeJson.title}>
    <Title items={data.homeJson.content.childMarkdownRemark.html} />
    <Services items={data.homeJson.services} />
    <ServiceList
      items={data.homeJson.services_list.lists}
      image={data.homeJson.services_list.image}
    />
    <FormContainer />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      services {
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        image
      }
      services_list {
        image {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        lists {
          title
          content {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;
