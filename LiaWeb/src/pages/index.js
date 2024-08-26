import React from 'react';
import {Redirect} from '@docusaurus/router';

function HomePage() {
  return <Redirect to="/docs/intro" />;
}

export default HomePage;
