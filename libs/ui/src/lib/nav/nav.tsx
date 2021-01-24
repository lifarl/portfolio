import React from 'react';
import { SocialWidget } from '../social-widget/social-widget';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavProps {
  githubLink: string;
  logoLabel?: string;
  navItems?: Array<string>;
}

const StyledNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
`;
const StyledLogoPart = styled.div``;
const StyledNavPart = styled.div`
  display: flex;
  ul {
    display: flex;
    margin: auto;
  }
  ul li {
    display: flex;
    align-items: center;
    padding: 0.5em;
    list-style: none;
  }
`;
const StyledNavLink = styled.a`
  text-decoration: none;
  color: black;
`;

export function Nav(props: NavProps) {
  const { logoLabel, navItems, githubLink } = props;
  return (
    <StyledNav>
      {logoLabel ? (
        <StyledLogoPart>
          <h1>{logoLabel}</h1>
        </StyledLogoPart>
      ) : (
        <span></span>
      )}
      <StyledNavPart>
        <ul>
          {navItems &&
            navItems.map((item) => {
              return (
                <li>
                  <StyledNavLink href="#">{item}</StyledNavLink>
                </li>
              );
            })}
          <li>
            <SocialWidget githubLink={githubLink} />
          </li>
        </ul>
      </StyledNavPart>
    </StyledNav>
  );
}

export default Nav;
