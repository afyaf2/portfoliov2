import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import PropTypes from 'prop-types';

const Thanks = ({ location }) => (
  <Layout>
    <Head pageTitle="thanks" />
    <Box>
      <h1> Hey! Thanks for your message! </h1>
    </Box>
  </Layout>
);

Thanks.propTypes = {
  location: PropTypes.object,
};

export default Thanks;
