const DisplayInstrument = ({instrument}) => {
         return (
            <div>
                <h1>{instrument.instrumentName}</h1>
                <table className="fretboard">
                    <FretNumbers fretNumbers={instrument.numberOfNotes}/>
                    <FretBoard fretboard={instrument.instrumentRepresentation}/>
                </table>
            </div>
        )
}

const FretNumbers = ({fretNumbers}) => {
    const numbers = Array.from(Array(fretNumbers + 1).keys()).map((number) => 
        <td>{number}</td>);
    return <thead><tr className='fretNumbers'>{numbers}</tr></thead>
    
};


const Note = ({note, noteIndex, stringIndex}) => {
    return (
        <td id={"string" + stringIndex + "note" + noteIndex} className="noteContainer">
            <div className='note' visibility={note.visibility}>{note.noteName + note.octave}</div>
        </td>
    )
}

const InstrumentString = ({notesArray, stringIndex}) => {
    const stringNotesArray = notesArray.map((element, index) =>
    <Note note={element} noteIndex={index} stringIndex={stringIndex}/>);
    return <tr id={"string" + stringIndex}>{stringNotesArray}</tr>
}

const FretBoard = ({fretboard}) => {
    const result = fretboard.map((string, index) =>
    <InstrumentString notesArray={string} stringIndex={index}/>);
    return <tbody className='neck'>{result}</tbody>
}

export default DisplayInstrument