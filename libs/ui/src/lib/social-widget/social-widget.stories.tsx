import React from 'react';
import { SocialWidget, SocialWidgetProps } from './social-widget';

export default {
  component: SocialWidget,
  title: 'SocialWidget',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SocialWidgetProps = { githubLink: '#' };

  return <SocialWidget {...props} />;
};
