import React from 'react';
import { render } from '@testing-library/react';

import ScrollArrow from './scroll-arrow';

describe('ScrollArrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollArrow />);
    expect(baseElement).toBeTruthy();
  });
});
