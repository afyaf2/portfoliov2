import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/services/item';
import { Container } from './gallery.css';

const Services = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Services.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Services;
