import MUSIC_CONST from "./musical-constants";

class MusicalInstrument {
    constructor(instumentSettings) {
        this.instrumentName = instumentSettings.instrumentName;
        this.numberOfNotes = instumentSettings.fretsNumber;
        this.stringKeys = Array.from(instumentSettings.tuning);
        this.instrumentRepresentation = this.createFretboard(this.numberOfNotes, this.stringKeys);
        this.generateBoard = this.createFretboard.bind(this)
    }

    createFretboard() {
        let board = [];

        for (let keyNote of this.stringKeys.reverse()) {
            let string = [];
            let [keyNoteName, keyOctaveNuber] = keyNote.split("");
            let index = MUSIC_CONST.chromaticScale.indexOf(keyNoteName);
            for (let noteNum = 0; noteNum <= this.numberOfNotes; noteNum++) {
                let newIndex = (index + noteNum) % MUSIC_CONST.notesInChromaticScale;
                let ocateveShift = (index + noteNum - newIndex) / MUSIC_CONST.notesInChromaticScale + Number(keyOctaveNuber);
                let noteName = MUSIC_CONST.chromaticScale[newIndex];
                let currentNote = new Note(noteName, ocateveShift, "false");
                
                string.push(currentNote)
            }
            board.push(string)
        }
        return board
    }

    displaySequence(sequenceValue) {
        this.clearFretBoard();
        for (let string of this.instrumentRepresentation) {
            for (let Note of string) {
                // if (Note.noteName === sequenceValue) {
                if (sequenceValue.includes(Note.noteName)) {
                    Note.visibility = "true";
                }
            }
        }
        // return this.instrumentRepresentation
    }


    generateSeqence(tonics, sequenceSchemme) {
        let [note, octaveNum] = tonics
        let noteIndex = MUSIC_CONST.chromaticScale.indexOf(note);
        const chordIndexes = [];

        chordIndexes.push(noteIndex)
        for (let interval of sequenceSchemme) {
            noteIndex = noteIndex + interval
            chordIndexes.push(noteIndex) 
        }

        const notesSequence = [];
        for (let index of chordIndexes) {
            
            let newIndex = index % MUSIC_CONST.notesInChromaticScale;
            let shift = (index - newIndex)/MUSIC_CONST.notesInChromaticScale;
            let newOctaveNum = Number(octaveNum) + shift
            // notesSequence.push(MUSIC_CONST.chromaticScale[newIndex] + String(newOctaveNum))
            notesSequence.push(MUSIC_CONST.chromaticScale[newIndex])
        }
        return notesSequence
}
    clearFretBoard() {
        for (let string of this.instrumentRepresentation) {
            for (let note of string) {
                note.visibility = "false";
            }
        }
    }
}

class Note {
    constructor(noteName, octave, visibility) {
        this.noteName = noteName;
        this.octave = octave;
        this.visibility = visibility
    }
}

export default MusicalInstrument 