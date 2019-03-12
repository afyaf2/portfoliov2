// react imports
import React from 'react';
import { Link } from 'gatsby';
import BrandLogo from '../../../content/images/icons/awfrejlogo.svg';
import { FooterBar, FooterLogo, FooterSocials } from './footer.css';
// logo imports
import Github from '../../../content/images/icons/github.svg';
import GoogleMail from '../../../content/images/icons/google.svg';
import LinkedIn from '../../../content/images/icons/linkedin.svg';

const Footer = () => (
  <FooterBar>

    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>

    <FooterLogo>
      <Link to="/">
        <BrandLogo />
      </Link>
    </FooterLogo>

    <FooterSocials>
      <a href="https://www.github.com/afyaf2">
        <Github />
      </a>
      <a href="mailto:me@awfrej.com">
        <GoogleMail />
      </a>
      <a href="https://www.linkedin.com/in/adam-frej-499110171/">
        <LinkedIn />
      </a>
    </FooterSocials>

  </FooterBar>
);

export default Footer;
