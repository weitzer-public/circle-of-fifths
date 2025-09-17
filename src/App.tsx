import React, { useState } from 'react';
import './App.css';
import CircleOfFifths from './CircleOfFifths';
import KeyInfo from './KeyInfo';
import Fretboard from './Fretboard';
import ChordDiagram from './ChordDiagram';
import { keyData } from './data';

function App() {
  const [selectedKey, setSelectedKey] = useState('C');

  const handleKeySelect = (keyName: string) => {
    setSelectedKey(keyName);
  };

  return (
    <div className="container">
      <div className="text-center mt-4 mb-5">
        <h1>Interactive Circle of Fifths</h1>
        <p className="lead">A tool for guitar players</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <CircleOfFifths onKeySelect={handleKeySelect} selectedKey={selectedKey} />
        </div>
        <div className="col-md-6">
          <KeyInfo selectedKey={selectedKey} />
          <hr />
          <Fretboard selectedKey={selectedKey} />
          <hr />
          <h4>Chords in Key</h4>
          <div className="d-flex justify-content-around flex-wrap">
            {Object.entries(keyData[selectedKey].chords).map(([roman, chord]) => (
              <div key={roman} className="text-center m-2">
                <strong>{roman}</strong>
                <ChordDiagram chordName={chord} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
