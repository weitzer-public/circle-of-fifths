import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyInfo from './KeyInfo';
import { Selection } from './App';

test('renders key info for C major', () => {
  const selection: Selection = { key: 'C', type: 'major' };
  render(<KeyInfo selection={selection} />);

  // Check for the key name
  expect(screen.getByText(/Key of/i)).toBeInTheDocument();
  expect(screen.getByText(/^C$/i)).toBeInTheDocument();

  // Check for the notes in the scale
  expect(screen.getByText(/Notes in Scale:/i)).toBeInTheDocument();
  expect(screen.getByText(/C, D, E, F, G, A, B/i)).toBeInTheDocument();

  // Check for the chords in the key
  expect(screen.getByText(/Chords in Key:/i)).toBeInTheDocument();
  const romanI = screen.getByText('I:');
  expect(romanI.parentElement).toHaveTextContent('I: C');
  const romanII = screen.getByText('ii:');
  expect(romanII.parentElement).toHaveTextContent('ii: Dm');
});

test('renders key info for A minor', () => {
    const selection: Selection = { key: 'C', type: 'minor' }; // C Major's relative minor is A minor
    render(<KeyInfo selection={selection} />);
  
    // Check for the key name
    expect(screen.getByText(/Key of/i)).toBeInTheDocument();
    expect(screen.getByText(/^Am$/i)).toBeInTheDocument();
  
    // Check for the notes in the scale
    expect(screen.getByText(/Notes in Scale:/i)).toBeInTheDocument();
    expect(screen.getByText(/A, B, C, D, E, F, G/i)).toBeInTheDocument();
  
    // Check for the chords in the key
    expect(screen.getByText(/Chords in Key:/i)).toBeInTheDocument();
    const romanI = screen.getByText('i:');
    expect(romanI.parentElement).toHaveTextContent('i: Am');
    const romanII = screen.getByText('ii:');
    expect(romanII.parentElement).toHaveTextContent('ii: Bdim');
});
