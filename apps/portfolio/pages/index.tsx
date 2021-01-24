import React from 'react';
import styled from 'styled-components';
import { HeaderImage, Nav } from '@portfolio/ui';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Nav githubLink={'https://github.com/lifarl/portfolio'} />
      <HeaderImage>
        <h1>This needs some time.</h1>
      </HeaderImage>
    </StyledPage>
  );
}

export default Index;
