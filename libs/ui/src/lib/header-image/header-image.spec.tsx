import React from 'react';
import { render } from '@testing-library/react';

import HeaderImage from './header-image';

describe('HeaderImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderImage />);
    expect(baseElement).toBeTruthy();
  });
});
