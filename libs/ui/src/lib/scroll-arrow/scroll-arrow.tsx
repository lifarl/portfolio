import React from 'react';
import { useSpring } from 'react-spring';
import styled from 'styled-components';
import { ArrowForwardIos } from '@material-ui/icons';

/* eslint-disable-next-line */
export interface ScrollArrowProps {}

const StyledScrollArrow = styled(ArrowForwardIos)`
  position: absolute;
  z-index: 100;
  cursor: pointer;
  transform: rotate(90deg);
  height: 60px !important;
  width: 80px !important;
  margin: 0px 0 0 -40px;
  line-height: 60px;
  left: 50%;
  bottom: 10px;
  color: black;
  text-align: center;
  font-size: 70px;
  text-decoration: none;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  animation: fade_move_down 3s ease-in-out infinite;
  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @keyframes fade_move_down {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 20px);
      opacity: 0;
    }
  }

  path {
    transform: rotate(90deg);
    transform-origin: center;
  }
`;

export function ScrollArrow(props: ScrollArrowProps) {
  const scrollOneVp = () => {
    window.scrollBy({
      top: window.innerHeight - document.documentElement.scrollTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return <StyledScrollArrow onClick={scrollOneVp}></StyledScrollArrow>;
}

export default ScrollArrow;
