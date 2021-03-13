import React from 'react';
import { MouseParallax } from './mouse-parallax';
import styled from 'styled-components';

export default {
  component: MouseParallax,
  title: 'MouseParallax',
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const primary = () => {
  return (
    <StyledWrapper>
      <MouseParallax foo={'bar'} />
    </StyledWrapper>
  );
};
