import React from 'react';
import { keyData } from './data';
import { Selection } from './App';

interface KeyInfoProps {
  selection: Selection;
}

const KeyInfo: React.FC<KeyInfoProps> = ({ selection }) => {
  const data = keyData[selection.key];

  if (!data) {
    return <div>Select a key</div>;
  }

  const scaleNotes = data.notes[selection.type];
  const chords = data.chords[selection.type];
  const keyName = selection.type === 'major' ? data.major : data.minor;

  return (
    <div>
      <h3>
        Key of <span className="fw-bold">{keyName}</span>
      </h3>
      <div className="mt-3">
        <h5>Notes in Scale:</h5>
        <p className="fs-5">{scaleNotes.join(', ')}</p>
      </div>
      <div className="mt-3">
        <h5>Chords in Key:</h5>
        <p className="fs-5">
          {Object.entries(chords).map(([roman, chord], index, arr) => (
            <span key={roman}>
              <strong>{roman}:</strong> {chord}{index < arr.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default KeyInfo;
