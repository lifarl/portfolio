import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderImageProps {
  children?: React.ReactNode;
}

const StyledHeaderImage = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function HeaderImage(props: HeaderImageProps) {
  return <StyledHeaderImage>{props.children}</StyledHeaderImage>;
}

export default HeaderImage;
