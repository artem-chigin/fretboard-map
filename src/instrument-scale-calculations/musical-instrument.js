class MusicalInstrument {
    constructor(numberOfNotes, stringKeys) {
        this.numberOfNotes = numberOfNotes;
        this.stringKeys = stringKeys.reverse();
        this.instrumentRepresentation = this.createFretboard(this.numberOfNotes, this.stringKeys);
        this.generateBoard = this.createFretboard.bind(this)
        
    }

    static chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    static notesInCromaticScale = 12;

    createFretboard() {
        let board = [];

        for (let keyNote of this.stringKeys) {
            let string = [];
            // let baseStringNote = note;
            let [keyNoteName, keyOctaveNuber] = keyNote.split("");
            // console.log(keyNote.split(""));
            let index = MusicalInstrument.chromaticScale.indexOf(keyNoteName);
            for (let noteNum = 0; noteNum <= this.numberOfNotes; noteNum++) {
                let newIndex = (index + noteNum) % MusicalInstrument.notesInCromaticScale;
                let ocateveShift = (index + noteNum - newIndex) / MusicalInstrument.notesInCromaticScale + Number(keyOctaveNuber);
                let noteName = MusicalInstrument.chromaticScale[newIndex];
                let currentNote = new Note(noteName, ocateveShift, "true");
                
                string.push(currentNote)
                // string.push(MusicalInstrument.chromaticScale[newIndex] + ocateveShift);
            }
            board.push(string)
        }
        return board
    }

    findNote(noteNameValue) {
        for (let voiceLine of this.instrumentRepresentation) {
            for (let Note of voiceLine) {
                if (Note.noteName !== noteNameValue) {
                    Note.visibility = "false";
                }
            }
        }
        return this.instrumentRepresentation
    }

    
    static major_chord_schemme = [4, 3];
    static minor_chord_schemme = [3, 4];


    generateSeqence(tonics, chordSchemme) {
        let [note, octaveNum] = tonics
        // console.log(note, typeof(octaveNum))
        let noteIndex = MusicalInstrument.chromaticScale.indexOf(note);
        const chordIndexes = [];

        chordIndexes.push(noteIndex)
        for (let interval of chordSchemme) {
            noteIndex = noteIndex + interval
            chordIndexes.push(noteIndex) 
        }

        const notesSequence = [];
        for (let index of chordIndexes) {
            
            let newIndex = index % MusicalInstrument.notesInCromaticScale;
            let shift = (index - newIndex)/MusicalInstrument.notesInCromaticScale;
            let newOctaveNum = Number(octaveNum) + shift
            // console.log(newOctaveNum)
            notesSequence.push(MusicalInstrument.chromaticScale[newIndex] + String(newOctaveNum))
        }
        return notesSequence
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