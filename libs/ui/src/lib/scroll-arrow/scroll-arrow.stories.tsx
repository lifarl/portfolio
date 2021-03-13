import React from 'react';
import { ScrollArrow, ScrollArrowProps } from './scroll-arrow';
import styled from 'styled-components';

export default {
  component: ScrollArrow,
  title: 'ScrollArrow',
};

const StyledUpperDiv = styled.div`
  background-color: white;
  height: 100vh;
`;
const StyledLowerDiv = styled.div`
  background-color: rgb(0, 0, 0);
  height: 100vh;
`;

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ScrollArrowProps = {};

  return (
    <>
      <StyledUpperDiv>
        <ScrollArrow />
      </StyledUpperDiv>
      <StyledLowerDiv></StyledLowerDiv>
    </>
  );
};
