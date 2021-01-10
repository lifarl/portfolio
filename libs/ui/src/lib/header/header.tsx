import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  logoLabel: string;
  navItems: Array<string>;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  background: rgba(0, 0, 0, 0.1);
`;
const StyledLogoPart = styled.div``;
const StyledNavPart = styled.div`
  display: flex;
  ul {
    display: flex;
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

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <StyledLogoPart>
        <h1>{props.logoLabel}</h1>
      </StyledLogoPart>
      <StyledNavPart>
        <ul>
          {props.navItems.map((item) => {
            return (
              <li>
                <StyledNavLink href="#">{item}</StyledNavLink>
              </li>
            );
          })}
        </ul>
      </StyledNavPart>
    </StyledHeader>
  );
}

export default Header;
