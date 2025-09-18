export interface KeyData {
  major: string;
  minor: string;
  notes: {
    major: string[];
    minor: string[];
    pentatonic: {
      major: string[];
      minor: string[];
    };
  };
  chords: {
    major: { I: string; ii: string; iii: string; IV: string; V: string; vi: string; vii: string; };
    minor: { i: string; ii: string; III: string; iv: string; v: string; VI: string; VII: string; };
  };
}

export const keyData: { [key: string]: KeyData } = {
  'C': {
    major: 'C',
    minor: 'Am',
    notes: {
      major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      pentatonic: {
        major: ['C', 'D', 'E', 'G', 'A'],
        minor: ['A', 'C', 'D', 'E', 'G'],
      }
    },
    chords: {
      major: { I: 'C', ii: 'Dm', iii: 'Em', IV: 'F', V: 'G', vi: 'Am', vii: 'Bdim' },
      minor: { i: 'Am', ii: 'Bdim', III: 'C', iv: 'Dm', v: 'Em', VI: 'F', VII: 'G' },
    }
  },
  'G': {
    major: 'G',
    minor: 'Em',
    notes: {
      major: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
      minor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
      pentatonic: {
        major: ['G', 'A', 'B', 'D', 'E'],
        minor: ['E', 'G', 'A', 'B', 'D'],
      }
    },
    chords: {
      major: { I: 'G', ii: 'Am', iii: 'Bm', IV: 'C', V: 'D', vi: 'Em', vii: 'F#dim' },
      minor: { i: 'Em', ii: 'F#dim', III: 'G', iv: 'Am', v: 'Bm', VI: 'C', VII: 'D' },
    }
  },
  'D': {
    major: 'D',
    minor: 'Bm',
    notes: {
      major: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
      minor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
      pentatonic: {
        major: ['D', 'E', 'F#', 'A', 'B'],
        minor: ['B', 'D', 'E', 'F#', 'A'],
      }
    },
    chords: {
      major: { I: 'D', ii: 'Em', iii: 'F#m', IV: 'G', V: 'A', vi: 'Bm', vii: 'C#dim' },
      minor: { i: 'Bm', ii: 'C#dim', III: 'D', iv: 'Em', v: 'F#m', VI: 'G', VII: 'A' },
    }
  },
  'A': {
    major: 'A',
    minor: 'F#m',
    notes: {
      major: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      minor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
      pentatonic: {
        major: ['A', 'B', 'C#', 'E', 'F#'],
        minor: ['F#', 'A', 'B', 'C#', 'E'],
      }
    },
    chords: {
      major: { I: 'A', ii: 'Bm', iii: 'C#m', IV: 'D', V: 'E', vi: 'F#m', vii: 'G#dim' },
      minor: { i: 'F#m', ii: 'G#dim', III: 'A', iv: 'Bm', v: 'C#m', VI: 'D', VII: 'E' },
    }
  },
  'E': {
    major: 'E',
    minor: 'C#m',
    notes: {
      major: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
      minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
      pentatonic: {
        major: ['E', 'F#', 'G#', 'B', 'C#'],
        minor: ['C#', 'E', 'F#', 'G#', 'B'],
      }
    },
    chords: {
      major: { I: 'E', ii: 'F#m', iii: 'G#m', IV: 'A', V: 'B', vi: 'C#m', vii: 'D#dim' },
      minor: { i: 'C#m', ii: 'D#dim', III: 'E', iv: 'F#m', v: 'G#m', VI: 'A', VII: 'B' },
    }
  },
  'B': {
    major: 'B',
    minor: 'G#m',
    notes: {
      major: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
      pentatonic: {
        major: ['B', 'C#', 'D#', 'F#', 'G#'],
        minor: ['G#', 'B', 'C#', 'D#', 'F#'],
      }
    },
    chords: {
      major: { I: 'B', ii: 'C#m', iii: 'D#m', IV: 'E', V: 'F#', vi: 'G#m', vii: 'A#dim' },
      minor: { i: 'G#m', ii: 'A#dim', III: 'B', iv: 'C#m', v: 'D#m', VI: 'E', VII: 'F#' },
    }
  },
  'F#': {
    major: 'F#',
    minor: 'D#m',
    notes: {
      major: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
      minor: ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
      pentatonic: {
        major: ['F#', 'G#', 'A#', 'C#', 'D#'],
        minor: ['D#', 'F#', 'G#', 'A#', 'C#'],
      }
    },
    chords: {
      major: { I: 'F#', ii: 'G#m', iii: 'A#m', IV: 'B', V: 'C#', vi: 'D#m', vii: 'E#dim' },
      minor: { i: 'D#m', ii: 'E#dim', III: 'F#', iv: 'G#m', v: 'A#m', VI: 'B', VII: 'C#' },
    }
  },
  'Db': {
    major: 'Db',
    minor: 'Bbm',
    notes: {
      major: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
      minor: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
      pentatonic: {
        major: ['Db', 'Eb', 'F', 'Ab', 'Bb'],
        minor: ['Bb', 'Db', 'Eb', 'F', 'Ab'],
      }
    },
    chords: {
      major: { I: 'Db', ii: 'Ebm', iii: 'Fm', IV: 'Gb', V: 'Ab', vi: 'Bbm', vii: 'Cdim' },
      minor: { i: 'Bbm', ii: 'Cdim', III: 'Db', iv: 'Ebm', v: 'Fm', VI: 'Gb', VII: 'Ab' },
    }
  },
  'Ab': {
    major: 'Ab',
    minor: 'Fm',
    notes: {
      major: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
      minor: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
      pentatonic: {
        major: ['Ab', 'Bb', 'C', 'Eb', 'F'],
        minor: ['F', 'Ab', 'Bb', 'C', 'Eb'],
      }
    },
    chords: {
      major: { I: 'Ab', ii: 'Bbm', iii: 'Cm', IV: 'Db', V: 'Eb', vi: 'Fm', vii: 'Gdim' },
      minor: { i: 'Fm', ii: 'Gdim', III: 'Ab', iv: 'Bbm', v: 'Cm', VI: 'Db', VII: 'Eb' },
    }
  },
  'Eb': {
    major: 'Eb',
    minor: 'Cm',
    notes: {
      major: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
      minor: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
      pentatonic: {
        major: ['Eb', 'F', 'G', 'Bb', 'C'],
        minor: ['C', 'Eb', 'F', 'G', 'Bb'],
      }
    },
    chords: {
      major: { I: 'Eb', ii: 'Fm', iii: 'Gm', IV: 'Ab', V: 'Bb', vi: 'Cm', vii: 'Ddim' },
      minor: { i: 'Cm', ii: 'Ddim', III: 'Eb', iv: 'Fm', v: 'Gm', VI: 'Ab', VII: 'Bb' },
    }
  },
  'Bb': {
    major: 'Bb',
    minor: 'Gm',
    notes: {
      major: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
      minor: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
      pentatonic: {
        major: ['Bb', 'C', 'D', 'F', 'G'],
        minor: ['G', 'Bb', 'C', 'D', 'F'],
      }
    },
    chords: {
      major: { I: 'Bb', ii: 'Cm', iii: 'Dm', IV: 'Eb', V: 'F', vi: 'Gm', vii: 'Adim' },
      minor: { i: 'Gm', ii: 'Adim', III: 'Bb', iv: 'Cm', v: 'Dm', VI: 'Eb', VII: 'F' },
    }
  },
  'F': {
    major: 'F',
    minor: 'Dm',
    notes: {
      major: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
      minor: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
      pentatonic: {
        major: ['F', 'G', 'A', 'C', 'D'],
        minor: ['D', 'F', 'G', 'A', 'C'],
      }
    },
    chords: {
      major: { I: 'F', ii: 'Gm', iii: 'Am', IV: 'Bb', V: 'C', vi: 'Dm', vii: 'Edim' },
      minor: { i: 'Dm', ii: 'Edim', III: 'F', iv: 'Gm', v: 'Am', VI: 'Bb', VII: 'C' },
    }
  }
};

export const circleOfFifthsKeys = [
  'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'
];
