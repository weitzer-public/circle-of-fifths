import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChordDiagram from './ChordDiagram';
import { playChord } from './audio';

jest.mock('./audio');

describe('ChordDiagram', () => {
  it('plays a chord when the diagram is clicked', () => {
    render(<ChordDiagram chordName="C" />);
    
    // The component itself is the clickable area
    const chordDiagramElement = document.querySelector('.chord-diagram-wrapper');
    if (chordDiagramElement) {
        fireEvent.click(chordDiagramElement);
    }

    // Expect playChord to have been called with the notes for C major
    expect(playChord).toHaveBeenCalledWith(['C4', 'E4', 'G4']);
  });
});
