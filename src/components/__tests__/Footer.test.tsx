import React from 'react';
import { Footer }  from '../footer';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Footer component', () => {
  it('Should render footer', () => {
   render(<Footer />)
  });
});
