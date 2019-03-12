import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Nav from 'components/header/nav';
import BrandLogo from '../../../content/images/icons/awfrejlogo.svg';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-200px',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ( pageTitle ) => (
  <AnimatedContainer>
    <Container hero={pageTitle.title === 'Home'}>
      <Link to="/">
        <BrandLogo />
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
