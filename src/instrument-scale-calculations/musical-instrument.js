class MusicalInstrument {
    constructor(numberOfNotes, voicesKeys) {
        this.numberOfNotes = numberOfNotes;
        this.voicesKeys = voicesKeys;
        this.instrument = this.generateBoard(this.numberOfNotes, this.voicesKeys)
        this.generateBoard = this.generateBoard.bind(this)
        
    }

    static chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    static notesInCromaticScale = 12;

    generateBoard() {
        let board = [];

        for (let keyNote of this.voicesKeys) {
            let string = [];
            // let baseStringNote = note;
            let index = MusicalInstrument.chromaticScale.indexOf(keyNote);
            for (let noteNum = 0; noteNum <= this.numberOfNotes; noteNum++) {
                let newIndex = (index + noteNum) % MusicalInstrument.notesInCromaticScale;
                string.push(MusicalInstrument.chromaticScale[newIndex]);
            }
            board.push(string)
        }

        // console.log("[MusicalInstrument.generateBoard] " + board);
        return board
    }
}



export default MusicalInstrument 