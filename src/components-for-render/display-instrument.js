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


function Note({note, noteIndex, stringIndex}) {

    const noteColors = {
        "C": "#BA0000",
        "C#": "6900BA",
        "Db": "6900BA",
        "D": "#BABA00",
        "D#": "#863365",
        "Eb": "#863365",
        "E": "#8EB1BA",
        "F": "#740001",
        "F#": "#5D65B9",
        "Gb": "#5D65B9",
        "G": "#BA5D00",
        "G#": "#8955B8",
        "Ab": "#8955B8",
        "A": "#259525",
        "A#": "#7B4B5B",
        "Bb": "#7B4B5B",
        "B": "#6893BA"
    }

    const noteColor = noteColors[note.noteName]

    return (
        <td id={"string" + stringIndex + "note" + noteIndex} className="noteContainer">
            <div className='note' 
                visibility={note.visibility}
                style={{backgroundColor: noteColor}}>{note.noteName + note.octave}</div>
        </td>
    )
}

function InstrumentString({notesArray, stringIndex, openStringKey, rootNote}) {
    
    const stringNotesArray = notesArray.map((element, index) =>
    <Note 
        note={element} 
        noteIndex={index} 
        stringIndex={stringIndex} 
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