const chromaticScaleSharp = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const chromaticScaleFlat = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
const INTERVALS = {
  p1: [0],
  m2: [1],
  M2: [2],
  m3: [3],
  M3: [4],
  p4: [5],
  tritone: [6],
  p5: [7],
  m6: [8],
  M6: [9],
  m7: [10],
  M7: [11],
  p8: [12],
};

function createChordScheme(chordBase, newInterval) {
  return chordBase.concat(newInterval);
}

const CHORDS_TRIAD = {
  maj: createChordScheme(INTERVALS.M3, INTERVALS.m3),
  m: createChordScheme(INTERVALS.m3, INTERVALS.M3),
  aug: createChordScheme(INTERVALS.M3, INTERVALS.M3),
  dim: createChordScheme(INTERVALS.m3, INTERVALS.m3),
};

const CHORDS_SUS = {
  sus2: createChordScheme(INTERVALS.M2, INTERVALS.p4),
  sus4: createChordScheme(INTERVALS.p4, INTERVALS.M2),
};

const CHORDS = {
  maj: CHORDS_TRIAD.maj,
  m: CHORDS_TRIAD.m,
  aug: CHORDS_TRIAD.aug,
  dim: CHORDS_TRIAD.dim,

  m6: createChordScheme(CHORDS_TRIAD.m, INTERVALS.M2),

  dim7: createChordScheme(CHORDS_TRIAD.dim, INTERVALS.m3),
  m7b5: createChordScheme(CHORDS_TRIAD.dim, INTERVALS.M3),

  maj7: createChordScheme(CHORDS_TRIAD.maj, INTERVALS.M3),
  m7: createChordScheme(CHORDS_TRIAD.m, INTERVALS.m3),
  dominant7: createChordScheme(CHORDS_TRIAD.maj, INTERVALS.m3),

  sus2: CHORDS_SUS.sus2,
  sus4: CHORDS_SUS.sus4,
};

const SCALES = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
};

const MUSIC_CONST = {
  chromaticScale: chromaticScaleSharp,
  chromaticScaleFlat: chromaticScaleFlat,
  notesInChromaticScale: chromaticScaleSharp.length,
  intervals: INTERVALS,
  chords: CHORDS,
  scales: SCALES,
  // note: {single_note: [0]}
};

export default MUSIC_CONST;
