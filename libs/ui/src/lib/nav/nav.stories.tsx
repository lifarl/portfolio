import React from 'react';
import { Nav, NavProps } from './nav';

export default {
  component: Nav,
  title: 'Nav',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NavProps = {
    githubLink: '#',
  };

  return <Nav {...props} />;
};
