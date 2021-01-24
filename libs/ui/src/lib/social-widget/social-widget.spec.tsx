import React from 'react';
import { render } from '@testing-library/react';

import SocialWidget from './social-widget';

describe('SocialWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialWidget githubLink={'#'} />);
    expect(baseElement).toBeTruthy();
  });
});
