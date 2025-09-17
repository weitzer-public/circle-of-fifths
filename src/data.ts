export interface KeyData {
  major: string;
  minor: string;
  notes: string[];
  chords: {
    I: string;
    ii: string;
    iii: string;
    IV: string;
    V: string;
    vi: string;
    vii: string;
  };
}

export const keyData: { [key: string]: KeyData } = {
  'C': {
    major: 'C',
    minor: 'Am',
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    chords: { I: 'C', ii: 'Dm', iii: 'Em', IV: 'F', V: 'G', vi: 'Am', vii: 'Bdim' }
  },
  'G': {
    major: 'G',
    minor: 'Em',
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    chords: { I: 'G', ii: 'Am', iii: 'Bm', IV: 'C', V: 'D', vi: 'Em', vii: 'F#dim' }
  },
  'D': {
    major: 'D',
    minor: 'Bm',
    notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    chords: { I: 'D', ii: 'Em', iii: 'F#m', IV: 'G', V: 'A', vi: 'Bm', vii: 'C#dim' }
  },
  'A': {
    major: 'A',
    minor: 'F#m',
    notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    chords: { I: 'A', ii: 'Bm', iii: 'C#m', IV: 'D', V: 'E', vi: 'F#m', vii: 'G#dim' }
  },
  'E': {
    major: 'E',
    minor: 'C#m',
    notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    chords: { I: 'E', ii: 'F#m', iii: 'G#m', IV: 'A', V: 'B', vi: 'C#m', vii: 'D#dim' }
  },
  'B': {
    major: 'B',
    minor: 'G#m',
    notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    chords: { I: 'B', ii: 'C#m', iii: 'D#m', IV: 'E', V: 'F#', vi: 'G#m', vii: 'A#dim' }
  },
  'F#': {
    major: 'F#',
    minor: 'D#m',
    notes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    chords: { I: 'F#', ii: 'G#m', iii: 'A#m', IV: 'B', V: 'C#', vi: 'D#m', vii: 'E#dim' }
  },
  'Db': {
    major: 'Db',
    minor: 'Bbm',
    notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    chords: { I: 'Db', ii: 'Ebm', iii: 'Fm', IV: 'Gb', V: 'Ab', vi: 'Bbm', vii: 'Cdim' }
  },
  'Ab': {
    major: 'Ab',
    minor: 'Fm',
    notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    chords: { I: 'Ab', ii: 'Bbm', iii: 'Cm', IV: 'Db', V: 'Eb', vi: 'Fm', vii: 'Gdim' }
  },
  'Eb': {
    major: 'Eb',
    minor: 'Cm',
    notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    chords: { I: 'Eb', ii: 'Fm', iii: 'Gm', IV: 'Ab', V: 'Bb', vi: 'Cm', vii: 'Ddim' }
  },
  'Bb': {
    major: 'Bb',
    minor: 'Gm',
    notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    chords: { I: 'Bb', ii: 'Cm', iii: 'Dm', IV: 'Eb', V: 'F', vi: 'Gm', vii: 'Adim' }
  },
  'F': {
    major: 'F',
    minor: 'Dm',
    notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    chords: { I: 'F', ii: 'Gm', iii: 'Am', IV: 'Bb', V: 'C', vi: 'Dm', vii: 'Edim' }
  }
};

export const circleOfFifthsKeys = [
  'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'
];
