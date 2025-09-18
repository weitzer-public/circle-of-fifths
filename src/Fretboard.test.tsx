import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Fretboard from './Fretboard';
import { playNote } from './audio';
import { Selection } from './App';

jest.mock('./audio');

describe('Fretboard', () => {
  const selection: Selection = { key: 'C', type: 'major' };

  it('plays a note when a fret is clicked', () => {
    render(<Fretboard selection={selection} />);
    
    // Find a note on the fretboard to click. Let's find the C note.
    const noteElements = screen.getAllByText('C');
    // Click the first C note found
    fireEvent.click(noteElements[0]);

    // Expect playNote to have been called. The exact note will depend on the fretboard generation logic.
    // For this test, we'll just check that it was called.
    expect(playNote).toHaveBeenCalled();
  });
});
