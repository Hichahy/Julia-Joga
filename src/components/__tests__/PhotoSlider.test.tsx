import React from 'react';
import { PhotoSlider } from '../photoSlider';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('PhotoSlider component', () => {
  it('Should render PhotoSlider', () => {
    render(<PhotoSlider />);
  });
});
