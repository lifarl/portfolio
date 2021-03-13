import React from 'react';
import { render } from '@testing-library/react';

import BodySection from './body-section';

describe('BodySection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BodySection />);
    expect(baseElement).toBeTruthy();
  });
});
