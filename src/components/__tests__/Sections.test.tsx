import React from 'react';
import { HomeSectionFirst } from '../layout/homeSectionFirst';
import { HomeSectionSecound } from '../layout/homeSectionSecound';
import { HomeSectionThree } from '../layout/homeSectionThree';
import { HomeSectionFourth } from '../layout/homeSectionFourth';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Should render sctions', () => {
  it('render sections', () => {
    render(<HomeSectionFirst />);
    render(<HomeSectionSecound/>);
    render(<HomeSectionThree/>);
    render(<HomeSectionFourth/>);
  });
});
