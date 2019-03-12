import React from 'react';
import PropTypes from 'prop-types';
import { ContentBlock } from './item.css';
import Illustration from './illustration.js';

const Item = ({ content, image }) => (
  <ContentBlock>
    <Illustration props={image} className="illustration" />
    <figcaption
      className="service-info"
      dangerouslySetInnerHTML={{
        __html: content.childMarkdownRemark.html,
      }}
    />
  </ContentBlock>
);

Item.propTypes = {
  content: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default Item;
