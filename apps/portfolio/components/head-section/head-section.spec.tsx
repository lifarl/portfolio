import React from 'react';
import { render } from '@testing-library/react';

import HeadSection from './head-section';

describe('HeadSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeadSection />);
    expect(baseElement).toBeTruthy();
  });
});
