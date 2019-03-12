import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconColumn = ({ items, title }) => (
  <div className="links-col">
    <h2>{title}</h2>
    {items.map((item, i) => (
      <Icon {...item} key={i} />
    ))}
  </div>
);

IconColumn.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IconColumn;
