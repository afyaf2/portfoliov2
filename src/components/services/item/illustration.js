import React from 'react';
import PropTypes from 'prop-types';

// import illustrations
import Illustration1 from '../../../../content/images/gallery/illustration1.svg';
import Illustration2 from '../../../../content/images/gallery/illustration2.svg';
import Illustration3 from '../../../../content/images/gallery/illustration3.svg';

const Illustration = image => {
  switch (image.props) {
    case 'illustration1':
      return <Illustration1 />;
    case 'illustration2':
      return <Illustration2 />;
    case 'illustration3':
      return <Illustration3 />;
    default:
      return (
        <div>
          {' '}
          <p> fail </p>{' '}
        </div>
      );
  }
};

Illustration.propTypes = {
  image: PropTypes.object,
};

export default Illustration;
