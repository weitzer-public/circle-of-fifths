export interface ChordShape {
  frets: number[];
  fingers: number[];
  barres?: number[];
  tones: string[];
}

export const chordData: { [key: string]: ChordShape } = {
    'C': { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0], tones: ['C', 'E', 'G'] },
    'Cm': { frets: [3, 3, 5, 5, 4, 3], fingers: [1, 1, 3, 4, 2, 1], barres: [3], tones: ['C', 'D#', 'G'] },
    'Cdim': { frets: [-1, -1, 1, 2, 1, 2], fingers: [0, 0, 1, 3, 2, 4], tones: ['C', 'D#', 'F#'] },
    'C#': { frets: [4, 4, 6, 6, 6, 4], fingers: [1, 1, 3, 4, 2, 1], barres: [4], tones: ['C#', 'F', 'G#'] },
    'C#m': { frets: [4, 4, 6, 6, 5, 4], fingers: [1, 1, 3, 4, 2, 1], barres: [4], tones: ['C#', 'E', 'G#'] },
    'C#dim': { frets: [-1, -1, 2, 3, 2, 3], fingers: [0, 0, 1, 4, 2, 3], tones: ['C#', 'E', 'G'] },
    'D': { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2], tones: ['D', 'F#', 'A'] },
    'Dm': { frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], tones: ['D', 'F', 'A'] },
    'Ddim': { frets: [-1, -1, 0, 1, 3, 1], fingers: [0, 0, 0, 1, 3, 1], tones: ['D', 'F', 'G#'] },
    'D#m': { frets: [6, 6, 8, 8, 7, 6], fingers: [1, 1, 3, 4, 2, 1], barres: [6], tones: ['D#', 'F#', 'A#'] },
    'D#dim': { frets: [-1, -1, 1, 2, 4, 2], fingers: [0, 0, 1, 2, 4, 3], tones: ['D#', 'F#', 'A'] },
    'Eb': { frets: [6, 6, 8, 8, 8, 6], fingers: [1, 1, 3, 4, 2, 1], barres: [6], tones: ['D#', 'G', 'A#'] },
    'Ebm': { frets: [6, 6, 8, 8, 7, 6], fingers: [1, 1, 3, 4, 2, 1], barres: [6], tones: ['D#', 'F#', 'A#'] },
    'E': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], tones: ['E', 'G#', 'B'] },
    'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], tones: ['E', 'G', 'B'] },
    'Edim': { frets: [-1, 1, 2, 0, 2, 0], fingers: [0, 1, 2, 0, 3, 0], tones: ['E', 'G', 'A#'] },
    'E#dim': { frets: [-1, 2, 3, 1, 3, 1], fingers: [0, 2, 3, 1, 4, 1], tones: ['F', 'G#', 'B'] },
    'F': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barres: [1], tones: ['F', 'A', 'C'] },
    'Fm': { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], barres: [1], tones: ['F', 'G#', 'C'] },
    'F#': { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barres: [2], tones: ['F#', 'A#', 'C#'] },
    'F#m': { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], barres: [2], tones: ['F#', 'A', 'C#'] },
    'F#dim': { frets: [-1, -1, 4, 5, 4, 5], fingers: [0, 0, 1, 3, 2, 4], tones: ['F#', 'A', 'C'] },
    'G': { frets: [3, 2, 0, 0, 0, 3], fingers: [3, 2, 0, 0, 0, 4], tones: ['G', 'B', 'D'] },
    'Gm': { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barres: [3], tones: ['G', 'A#', 'D'] },
    'Gdim': { frets: [-1, -1, -1, 3, 2, 3], fingers: [0, 0, 0, 2, 1, 3], tones: ['G', 'A#', 'C#'] },
    'G#m': { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], barres: [4], tones: ['G#', 'B', 'D#'] },
    'G#dim': { frets: [-1, -1, -1, 4, 3, 4], fingers: [0, 0, 0, 2, 1, 3], tones: ['G#', 'B', 'D'] },
    'A': { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0], tones: ['A', 'C#', 'E'] },
    'Am': { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0], tones: ['A', 'C', 'E'] },
    'Adim': { frets: [-1, -1, -1, 5, 4, 5], fingers: [0, 0, 0, 2, 1, 3], tones: ['A', 'C', 'D#'] },
    'A#m': { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barres: [6], tones: ['A#', 'C#', 'F'] },
    'A#dim': { frets: [-1, -1, -1, 6, 5, 6], fingers: [0, 0, 0, 2, 1, 3], tones: ['A#', 'C#', 'E'] },
    'Bb': { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], barres: [6], tones: ['A#', 'D', 'F'] },
    'Bbm': { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barres: [6], tones: ['A#', 'C#', 'F'] },
    'B': { frets: [7, 9, 9, 8, 7, 7], fingers: [1, 3, 4, 2, 1, 1], barres: [7], tones: ['B', 'D#', 'F#'] },
    'Bm': { frets: [7, 9, 9, 7, 7, 7], fingers: [1, 3, 4, 1, 1, 1], barres: [7], tones: ['B', 'D', 'F#'] },
    'Bdim': { frets: [-1, 2, 3, 4, 3, -1], fingers: [0, 1, 2, 3, 4, 0], tones: ['B', 'D', 'F'] },
};