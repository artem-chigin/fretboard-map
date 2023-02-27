const MUSIC_CONST = {
    chromaticScale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    notesInChromaticScale: 12,
    intervals: {
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
        p8: [12]
    },
    chords: {
            maj: [4, 3],
            m: [3, 4],
            aug: [4, 4],
            dim: [3, 3],
            maj7: [4, 3, 4],
            dominant7: [4, 3, 3],

    },
    scales: {
        major: [2, 2, 1, 2, 2, 2, 1],
        minor: [2, 1, 2, 2, 1, 2, 2],
    },
    // note: {single_note: [0]}
};

export default MUSIC_CONST;