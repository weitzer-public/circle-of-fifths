import React, { useState } from 'react';
import './App.css';
import CircleOfFifths from './CircleOfFifths';
import KeyInfo from './KeyInfo';
import Fretboard from './Fretboard';
import ChordDiagram from './ChordDiagram';
import { keyData } from './data';
import EnhancedUI from './EnhancedUI'; // Import the new component

export type Selection = {
  key: string;
  type: 'major' | 'minor';
}

function App() {
  const [selection, setSelection] = useState<Selection>({ key: 'C', type: 'major' });
  const [showEnhancedUI, setShowEnhancedUI] = useState(false); // State for the toggle

  const handleKeySelect = (key: string, type: 'major' | 'minor') => {
    setSelection({ key, type });
  };

  const chords = keyData[selection.key].chords[selection.type];

  const toggleUI = () => {
    setShowEnhancedUI(!showEnhancedUI);
  };

  return (
    <div>
      <div className="toggle-ui-container">
        <button className="btn btn-primary" onClick={toggleUI}>
          {showEnhancedUI ? 'Show Original UI' : 'Show Enhanced UI'}
        </button>
      </div>

      {showEnhancedUI ? (
        <EnhancedUI selection={selection} onKeySelect={handleKeySelect} />
      ) : (
        <div className="container">
          <div className="text-center mt-4 mb-5">
            <h1>Interactive Circle of Fifths</h1>
            <p className="lead">A tool for guitar players</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <CircleOfFifths onKeySelect={handleKeySelect} selection={selection} />
            </div>
            <div className="col-md-6">
              <KeyInfo selection={selection} />
              <hr />
              <Fretboard selection={selection} />
              <hr />
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
      )}
    </div>
  );
}

export default App;
