import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BodySectionProps {
  color?: string;
  children?: React.ReactNode;
}

const StyledBodySection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.color};
`;

export function BodySection(props: BodySectionProps) {
  return (
    <StyledBodySection color={props.color}>{props.children}</StyledBodySection>
  );
}

export default BodySection;
