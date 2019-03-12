import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { IconContainer } from './iconlist.css';

const IconList = ({ items, title }) => (
  <IconContainer>
    <h2>{title}</h2>
    <div className={`icon-row ${title}`}>
      {items.map((item, i) => (
        <Icon {...item} key={i} />
      ))}
    </div>
  </IconContainer>
);

IconList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IconList;
