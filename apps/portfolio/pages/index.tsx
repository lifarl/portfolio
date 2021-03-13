import React from 'react';
import styled from 'styled-components';
import { HeadSection } from '../components/head-section/head-section';
import { BodySection } from '../components/body-section/body-section';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <HeadSection />
      <BodySection color={'#f5f4f4'}></BodySection>
      <BodySection color={'#c7c7c7'}></BodySection>
    </StyledPage>
  );
}

export default Index;
