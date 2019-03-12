import React from 'react';
import PropTypes from 'prop-types';

// import SVG icons here

// tools
import Invision from '../../../content/images/icons/invision.svg';
import Sketch from '../../../content/images/icons/sketch.svg';
import Zeplin from '../../../content/images/icons/zeplin.svg';

// tech
import HTML5 from '../../../content/images/icons/html5.svg';
import CSS3 from '../../../content/images/icons/css3.svg';
import SASS from '../../../content/images/icons/sass.svg';
import BootstrapIcon from '../../../content/images/icons/bootstrap.svg';
import SemanticIcon from '../../../content/images/icons/semanticui.svg';
import JS from '../../../content/images/icons/javascript.svg';
import Special from '../../../content/images/icons/special.svg';
import Rails from '../../../content/images/icons/rails.svg';
import Heroku from '../../../content/images/icons/heroku.svg';
import WebpackIcon from '../../../content/images/icons/webpack.svg';
import Shopify from '../../../content/images/icons/shopify.svg';

// links

import Github from '../../../content/images/icons/github.svg';
import GoogleMail from '../../../content/images/icons/google.svg';
import Instagram from '../../../content/images/icons/instagram.svg';
import Resume from '../../../content/images/icons/resume.svg';
import LinkedIn from '../../../content/images/icons/linkedin.svg';

const Icon = ({ title, url }) => {
  switch (title) {
    case 'sketch':
      return <Sketch />;
    case 'zeplin':
      return <Zeplin />;
    case 'invision':
      return <Invision />;
    case 'html5':
      return <HTML5 />;
    case 'css3':
      return <CSS3 />;
    case 'sass':
      return <SASS />;
    case 'bootstrap':
      return <BootstrapIcon />;
    case 'semanticui':
      return <SemanticIcon />;
    case 'javascript':
      return <JS />;
    case 'react':
      return <Special />;
    case 'rails':
      return <Rails />;
    case 'heroku':
      return <Heroku />;
    case 'webpack':
      return <WebpackIcon />;
    case 'shopify':
      return <Shopify />;
    case 'resume':
      return (
        <a href={url}>
          <Resume />
        </a>
      );
    case 'linkedin':
      return (
        <a href={url}>
          <LinkedIn />
        </a>
      );
    case 'github':
      return (
        <a href={url}>
          <Github />
        </a>
      );
    case 'gmail':
      return (
        <a href={url}>
          <GoogleMail />
        </a>
      );
    case 'instagram':
      return (
        <a href={url}>
          <Instagram />
        </a>
      );
    default:
      return <div />;
  }
};

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Icon;
