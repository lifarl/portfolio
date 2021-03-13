import React from 'react';

import { ScrollArrow, HeaderImage, Nav, MouseParallax } from '@portfolio/ui';

/* eslint-disable-next-line */
export interface HeadSectionProps {}

export function HeadSection(props: HeadSectionProps) {
  return (
    <HeaderImage>
      <Nav githubLink={'https://github.com/lifarl/portfolio'} />
      <MouseParallax foo={''} />
      <ScrollArrow />
    </HeaderImage>
  );
}

export default HeadSection;
