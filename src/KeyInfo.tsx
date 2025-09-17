import React from 'react';
import { keyData } from './data';

interface KeyInfoProps {
  selectedKey: string;
}

const KeyInfo: React.FC<KeyInfoProps> = ({ selectedKey }) => {
  const data = keyData[selectedKey];

  if (!data) {
    return <div>Select a key</div>;
  }

  return (
    <div>
      <h3>
        Key of <span className="fw-bold">{data.major}</span> / <span className="text-muted">{data.minor}</span>
      </h3>
      <div className="mt-3">
        <h5>Notes in Scale:</h5>
        <p className="fs-5">{data.notes.join(', ')}</p>
      </div>
      <div className="mt-3">
        <h5>Chords in Key:</h5>
        <p className="fs-5">
          {Object.entries(data.chords).map(([roman, chord], index, arr) => (
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
