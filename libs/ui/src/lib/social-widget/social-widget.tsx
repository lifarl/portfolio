import React from 'react';
import { GitHub } from '@material-ui/icons';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SocialWidgetProps {
  githubLink: string;
}

const StyledSocialWidget = styled.div`
  display: flex;
`;

export function SocialWidget(props: SocialWidgetProps) {
  return (
    <StyledSocialWidget>
      <Link href={props.githubLink} color="inherit">
        <GitHub />
      </Link>
    </StyledSocialWidget>
  );
}

export default SocialWidget;
