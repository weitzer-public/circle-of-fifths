import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CircleOfFifths from './CircleOfFifths';
import { playNote } from './audio';
import { Selection } from './App';

jest.mock('./audio');

describe('CircleOfFifths', () => {
  const onKeySelect = jest.fn();
  const selection: Selection = { key: 'C', type: 'major' };

  it('plays a note when a major key is clicked', () => {
    render(<CircleOfFifths onKeySelect={onKeySelect} selection={selection} />);
    
    // Find and click the G major key
    const gMajorKey = screen.getByText('G');
    fireEvent.click(gMajorKey);

    expect(playNote).toHaveBeenCalledWith('G3');
  });

  it('plays a note when a minor key is clicked', () => {
    render(<CircleOfFifths onKeySelect={onKeySelect} selection={selection} />);
    
    // Find and click the Am key (relative minor of C)
    const aMinorKey = screen.getByText('Am');
    fireEvent.click(aMinorKey);

    expect(playNote).toHaveBeenCalledWith('A3');
  });
});
