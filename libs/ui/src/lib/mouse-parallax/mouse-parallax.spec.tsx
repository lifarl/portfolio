import React from 'react';
import { render } from '@testing-library/react';

import MouseParallax from './mouse-parallax';

describe('MouseParallax', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MouseParallax />);
    expect(baseElement).toBeTruthy();
  });
});
