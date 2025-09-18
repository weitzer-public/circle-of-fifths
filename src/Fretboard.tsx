import React, { useState, useEffect } from 'react';
import { keyData } from './data';
import { chordData } from './chord-data';
import { TUNING, NOTES, NUM_FRETS } from './constants';
import { Selection } from './App';
import './Fretboard.css';

interface FretboardProps {
  selection: Selection;
}

type FretboardView = 'scale' | 'pentatonic' | 'chord';

const Fretboard: React.FC<FretboardProps> = ({ selection }) => {
  const [fretboardView, setFretboardView] = useState<FretboardView>('scale');
  const [selectedChord, setSelectedChord] = useState<string>('I');

  useEffect(() => {
    const defaultChord = selection.type === 'major' ? 'I' : 'i';
    setSelectedChord(defaultChord);
  }, [selection, fretboardView]);

  const getNote = (stringIndex: number, fret: number) => {
    const openStringNoteIndex = NOTES.indexOf(TUNING[stringIndex]);
    const noteIndex = (openStringNoteIndex + fret) % 12;
    return NOTES[noteIndex];
  };

  const diatonicChords = keyData[selection.key].chords[selection.type];
  const chordName = diatonicChords[selectedChord as keyof typeof diatonicChords];

  const getNotesToDisplay = () => {
    switch (fretboardView) {
      case 'scale':
        return keyData[selection.key].notes[selection.type];
      case 'pentatonic':
        return keyData[selection.key].notes.pentatonic[selection.type];
      case 'chord':
        return chordData[chordName]?.tones || [];
      default:
        return keyData[selection.key].notes[selection.type];
    }
  };

  const notesToDisplay = getNotesToDisplay();
  const rootNoteName = keyData[selection.key].notes[selection.type][0];
  
  const getTitle = () => {
    switch (fretboardView) {
        case 'scale':
            return selection.type === 'major' ? `${keyData[selection.key].major} Major Scale` : `${keyData[selection.key].minor} Minor Scale`;
        case 'pentatonic':
            return selection.type === 'major' ? `${keyData[selection.key].major} Major Pentatonic` : `${keyData[selection.key].minor} Minor Pentatonic`;
        case 'chord':
            return `${chordName} Chord Tones`;
        default:
            return '';
    }
  }
  const title = getTitle();
  const fretLabelPoints = [3, 5, 7, 9, 12];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Fretboard: {title}</h4>
        <div className="view-switcher btn-group btn-group-sm">
          <button className={`btn btn-outline-primary ${fretboardView === 'scale' ? 'active' : ''}`} onClick={() => setFretboardView('scale')}>Scale</button>
          <button className={`btn btn-outline-primary ${fretboardView === 'pentatonic' ? 'active' : ''}`} onClick={() => setFretboardView('pentatonic')}>Pentatonic</button>
          <button className={`btn btn-outline-primary ${fretboardView === 'chord' ? 'active' : ''}`} onClick={() => setFretboardView('chord')}>Chord Tones</button>
        </div>
      </div>

      {fretboardView === 'chord' && (
        <div className="my-2">
          <select className="form-select form-select-sm" value={selectedChord} onChange={e => setSelectedChord(e.target.value)}>
            {Object.keys(diatonicChords).map(roman => (
              <option key={roman} value={roman}>{roman}: {diatonicChords[roman as keyof typeof diatonicChords]}</option>
            ))}
          </select>
        </div>
      )}

      <div className="fretboard">
        {TUNING.slice().reverse().map((stringName, stringIndex) => (
          <div key={stringIndex} className="string">
            {Array.from(Array(NUM_FRETS + 1).keys()).map(fret => {
              const note = getNote(5 - stringIndex, fret);
              const isNoteInScale = notesToDisplay.includes(note);
              const isRoot = isNoteInScale && note === rootNoteName;

              return (
                <div key={fret} className="fret">
                  {isNoteInScale && (
                    <div className={`note ${isRoot ? 'root' : ''}`}>
                      {note}
                    </div>
                  )}
                  {stringIndex === 5 && fretLabelPoints.includes(fret) && (
                    <div className="fret-label">{fret}</div>
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
