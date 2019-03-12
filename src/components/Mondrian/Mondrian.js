import React from 'react';
import PropTypes from 'prop-types';
import IconList from 'components/Mondrian/IconList';
import IconColumn from 'components/Mondrian/IconColumn';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MondrianGrid } from './mondrian.css';

const Mondrian = ({ gridContent }) => (
  <MondrianGrid>
    <div className="line-top" />
    <div className="picture">
    <Img
      fixed={gridContent.image ? gridContent.image.childImageSharp.fixed : {}}
      alt="Montreal web design services"
    />
    </div>
    <div className="icons">
      <IconList title="Tools" items={gridContent.tools} />
      <IconList title="Tech" items={gridContent.tech} />
    </div>
    <div className="vertical-line" />
    <div className="color-block" />
    <IconColumn title="Links" items={gridContent.links} />
    <div
      className="about-content"
      dangerouslySetInnerHTML={{
        __html: gridContent.content.childMarkdownRemark.html,
      }}
    />
    <div className="line-bottom" />
    <div className="cta-button">
      <Link to="/">Want to work with me?</Link>
    </div>
  </MondrianGrid>
);

Mondrian.propTypes = {
  gridContent: PropTypes.object.isRequired,
};

export default Mondrian;
