import noteColors from "../instrument-scale-calculations/notes-colors";

function DisplayInstrument({instrument, rootNote}) {
         return (
            <div className="instrument-representation">
                {/* <h1 className="instrument-name">{instrument.instrumentName}</h1> */}
                <table className="fretboard">
                    <FretNumbers fretNumbers={instrument.numberOfNotes}/>
                    <FretBoard 
                        fretboard={instrument.instrumentRepresentation}
                        rootNote={rootNote}/>
                </table>
            </div>
        )
}

function FretNumbers({fretNumbers}) {
    const numbers = Array.from(Array(fretNumbers + 1).keys()).map((number, index) => 
        <td key={"fretnum" + index}>{number}</td>);
    return <thead><tr className='fretNumbers'><td></td>{numbers}</tr></thead>
    
};


function Note({note, noteIndex, stringIndex, rootNote}) {

    // const noteColor = noteColors[note.noteName]
    const noteStyle = {
        backgroundColor: noteColors[note.noteName],
    };
    const rootNoteStyle = {
        widht: "34px",
        height: "34px",
        backgroundColor: noteColors[note.noteName],
        borderRadius: "18px",
        border: "solid",
        // fontWeight: "bold",
        // fontStyle: "italic"
    };

    let currentNoteStyle = noteStyle;
    if (rootNote === note.noteName) {
        currentNoteStyle = rootNoteStyle;
    };



    return (
        <td id={"string" + stringIndex + "note" + noteIndex} className="noteContainer">
            <div className='note' 
                visibility={note.visibility}
                style={currentNoteStyle}>{note.noteName + note.octave}</div>
        </td>
    )
}

function InstrumentString({notesArray, stringIndex, openStringKey, rootNote}) {
    
    const stringNotesArray = notesArray.map((element, index) =>
    <Note 
        note={element} 
        noteIndex={index} 
        stringIndex={stringIndex} 
        rootNote={rootNote}
        key={"note" + index}/>);
    return <tr id={"string" + stringIndex} className="string"><td className="open-string">{openStringKey}</td>{stringNotesArray}</tr>
}

function FretBoard({fretboard, rootNote}) {
    const result = fretboard.map((string, index) =>
    <InstrumentString 
        notesArray={string}
        stringIndex={index} 
        openStringKey={string[0].noteName} 
        key={"string" + index}
        rootNote={rootNote}/>);
    return <tbody className='neck'>{result}</tbody>
}

export default DisplayInstrument