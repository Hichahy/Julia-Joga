import React from 'react';
import { NavigationBar } from '../navigationBar';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Navigation component', () => {
  it('Ref Should go to section', () => {
   render(<NavigationBar />)
    const sectionRef = screen.getByText('section1');
    fireEvent.click(sectionRef);
    screen.debug()
  })
});
