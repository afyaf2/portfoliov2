import React from 'react';
import PropTypes from 'prop-types';
import { Hero } from './title.css';

const Title = ({ items }) => {
  return (
    <Hero
      dangerouslySetInnerHTML={{
        __html: items,
      }}
    />
  );
};

Title.propTypes = {
  items: PropTypes.string,
};

export default Title;
