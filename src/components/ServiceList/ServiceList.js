import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/ServiceList/item';
import Img from 'gatsby-image';
import { ListContainer, List } from './servicelist.css';

const ServiceList = ({ items, image }) => (
  <ListContainer>
    <Img
      fluid={image ? image.childImageSharp.fluid : {}}
      alt="Montreal web design services"
    />

    <List>
      <h2>Services - à la carte.</h2>

      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </List>
  </ListContainer>
);

ServiceList.propTypes = {
  image: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServiceList;
