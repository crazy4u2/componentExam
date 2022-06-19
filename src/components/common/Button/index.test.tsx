import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { provideTheme } from '~utils/WithTheme';

describe('Button', () => {
  it('rendering button', () => {
    const { getByText } = render(provideTheme(<Button>Button</Button>));
    const paragraph = getByText(/^Button/);
    expect(paragraph).toHaveTextContent('Button');
  });

  it('button click event', () => {});
  it('props button', () => {});
  it('chaning button type', () => {});
});
