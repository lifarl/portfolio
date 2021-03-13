import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface MouseParallaxProps {
  foo?: string;
}

const cardprops = css`
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
`;

const StyledMouseParallax = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCardReact = styled(animated.div)`
  ${cardprops}
  min-width: 80ch;
  min-height: 80ch;
  width: 25vw;
  height: 20vw;
  max-width: 80ch;
  max-height: 80ch;
  background-image: url('react.svg');
`;

const StyledCardJs = styled(animated.div)`
  ${cardprops}
  min-width: 15ch;
  min-height: 15ch;
  width: 15vw;
  height: 15vw;
  max-width: 15ch;
  max-height: 15ch;
  background-image: url('./javascript.svg');
`;

const StyledCardTs = styled(animated.div)`
  ${cardprops}
  min-width: 15ch;
  min-height: 15ch;
  width: 15vw;
  height: 15vw;
  max-width: 15ch;
  max-height: 15ch;
  background-image: url('./typescript.svg');
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const transReact: any = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const transTs: any = (x, y) =>
  `translate3d(${x / 6 - 150}px,${y / 6 - 100}px,0)`;
const transJs: any = (x, y) =>
  `translate3d(${x / 3 + 100}px,${y / 3 + 110}px,0)`;

export function MouseParallax({ foo }) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const facebookAttr =
    'Attribution: Facebook. This file is licensed under the Creative Commons Attribution-Share Alike 1.0 Generic license';
  return (
    <StyledMouseParallax
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <StyledCardReact
        style={{ transform: props.xy.interpolate(transReact) }}
        copy-right={facebookAttr}
      />
      <StyledCardJs style={{ transform: props.xy.interpolate(transJs) }} />
      <StyledCardTs style={{ transform: props.xy.interpolate(transTs) }} />
    </StyledMouseParallax>
  );
}

export default MouseParallax;
