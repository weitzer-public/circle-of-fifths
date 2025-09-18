import React from 'react';
import Chord from '@tombatossals/react-chords/lib/Chord';
import { chordData } from './chord-data';
import './ChordDiagram.css';
import { playChord } from './audio';

interface ChordDiagramProps {
  chordName: string;
}

const instrument = {
  strings: 6,
  fretsOnChord: 4,
  name: 'Guitar',
  keys: [],
  tunings: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E']
  }
};

const ChordDiagram: React.FC<ChordDiagramProps> = ({ chordName }) => {
  const chord = chordData[chordName];

  const handleChordClick = () => {
    if (chord?.tones) {
      // Append a default octave (4) to each tone to play the chord
      const notesToPlay = chord.tones.map(tone => `${tone}4`);
      playChord(notesToPlay);
    }
  };

  if (!chord) {
    return (
      <div className="chord-placeholder">
        <div className="chord-name">{chordName}</div>
        <div className="not-available">N/A</div>
      </div>
    );
  }

  return (
    <div className="chord-diagram-wrapper" onClick={handleChordClick}>
        <Chord
            chord={chord}
            instrument={instrument}
        />
    </div>
  );
};

export default ChordDiagram;
