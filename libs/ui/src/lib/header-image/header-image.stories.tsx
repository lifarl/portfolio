import React from 'react';
import { HeaderImage, HeaderImageProps } from './header-image';

export default {
  component: HeaderImage,
  title: 'HeaderImage',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HeaderImageProps = {};

  return <HeaderImage />;
};
