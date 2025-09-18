import React from 'react';
import './EnhancedUI.css';
import CircleOfFifths from './CircleOfFifths';
import KeyInfo from './KeyInfo';
import Fretboard from './Fretboard';
import ChordDiagram from './ChordDiagram';
import { keyData } from './data';
import { Selection } from './App';

interface EnhancedUIProps {
  selection: Selection;
  onKeySelect: (key: string, type: 'major' | 'minor') => void;
}

const EnhancedUI: React.FC<EnhancedUIProps> = ({ selection, onKeySelect }) => {
  const chords = keyData[selection.key].chords[selection.type];

  return (
    <div className="enhanced-ui">
      <div className="enhanced-container">
        <div className="enhanced-component circle-of-fifths-grid">
          <CircleOfFifths onKeySelect={onKeySelect} selection={selection} />
        </div>
        <div className="enhanced-component key-info-grid">
          <KeyInfo selection={selection} />
        </div>
        <div className="enhanced-component fretboard-grid">
          <Fretboard selection={selection} />
        </div>
        <div className="enhanced-component chords-grid">
          <h4>Chords in Key</h4>
          <div className="d-flex justify-content-around flex-wrap">
            {Object.entries(chords).map(([roman, chord]) => (
              <div key={roman} className="text-center m-2">
                <strong>{roman}</strong>
                <div>{chord}</div>
                <ChordDiagram chordName={chord} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedUI;
