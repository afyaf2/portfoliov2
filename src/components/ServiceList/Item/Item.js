import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, content }) => (
  <div className="list-item">
    <h5>{title} </h5>
    <div
      dangerouslySetInnerHTML={{
        __html: content.childMarkdownRemark.html,
      }}
    />
  </div>
);

Item.propTypes = {
  content: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default Item;
