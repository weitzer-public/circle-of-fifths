import React from 'react';
import { keyData } from './data';
import { TUNING, NOTES, NUM_FRETS } from './constants';
import './Fretboard.css';

interface FretboardProps {
  selectedKey: string;
}

const Fretboard: React.FC<FretboardProps> = ({ selectedKey }) => {
  const getNote = (stringIndex: number, fret: number) => {
    const openStringNoteIndex = NOTES.indexOf(TUNING[stringIndex]);
    const noteIndex = (openStringNoteIndex + fret) % 12;
    return NOTES[noteIndex];
  };

  const scaleNotes = keyData[selectedKey].notes;
  const rootNote = keyData[selectedKey].major;

  return (
    <div>
      <h4>Fretboard: {selectedKey} Major Scale</h4>
      <div className="fretboard">
        {TUNING.slice().reverse().map((stringName, stringIndex) => (
          <div key={stringIndex} className="string">
            {Array.from(Array(NUM_FRETS + 1).keys()).map(fret => {
              const note = getNote(5 - stringIndex, fret);
              const isNoteInScale = scaleNotes.includes(note);
              const isRoot = isNoteInScale && note === rootNote;

              return (
                <div key={fret} className="fret">
                  {isNoteInScale && (
                    <div className={`note ${isRoot ? 'root' : ''}`}>
                      {note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fretboard;
