import noteColors from "../instrument-scale-calculations/notes-colors";

function DisplayInstrument({instrument, rootNote}) {
         return (
            <div className="inner-instrument-container">
                {/* <h1 className="instrument-name">{instrument.instrumentName}</h1> */}
                <table className="fretboard">
                    <FretNumbers fretNumbers={instrument.numberOfNotes}/>
                    <FretBoard 
                        fretboard={instrument.instrumentRepresentation}
                        rootNote={rootNote}/>
                    {/* <div>some info</div> */}
                    <VerticalFretBoard 
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


function Note({note, noteIndex, stringIndex, rootNote, isVertical}) {
    const noteStyle = {
        backgroundColor: noteColors[note.noteName],
        position: "relative",
        top: "16px",
        left: "0"
    };
    const rootNoteStyle = {
        widht: "34px",
        height: "34px",
        backgroundColor: noteColors[note.noteName],
        borderRadius: "17px",
        border: "solid",
        top: "17px"

    };



    let currentNoteStyle = noteStyle;
    if (rootNote === note.noteName) {
        currentNoteStyle = rootNoteStyle;
    };
  
    const noteContainerStyle = {
        minWidth: "50px",
        borderRight: "solid whitesmoke 2px",
        borderBottom: "solid black",
    }
    const verticalNoteContainerStyle = {
        minWidth: "50px",
        minHeight: "75px",
        borderBottom: "solid whitesmoke 2px",
        borderRight: "solid black",
        border: "solid"
    }

    let currentContainerStyle = noteContainerStyle;
    if (isVertical) {
        currentContainerStyle = verticalNoteContainerStyle;
        currentNoteStyle.top = "0";
        currentNoteStyle.left = "25px";
        // console.log(currentNoteStyle);
    }

    return (
        <td id={"string" + stringIndex + "note" + noteIndex} 
            className="noteContainer"
            style={currentContainerStyle}
            >
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
    const resultBoard = fretboard.map((string, index) =>
    <InstrumentString 
        notesArray={string}
        stringIndex={index} 
        openStringKey={string[0].noteName} 
        key={"string" + index}
        rootNote={rootNote}/>);
    return <tbody className='neck'>{resultBoard}</tbody>
}

function Fret({notesArray, fretIndex, openStringKey, rootNote}) {
    const fretNotes = notesArray.map((element, index) =>
    <Note 
        note={element} 
        noteIndex={index} 
        stringIndex={fretIndex} 
        rootNote={rootNote}
        key={"vert_note" + index}
        style={{border: "solid"}}
        isVertical={true}
        />)
    return <tr id={"fret" + fretIndex} className="fret">{fretNotes}</tr>
}

function VerticalFretBoard({fretboard, rootNote}) {
    // const fretboard = instrument.instrumentRepresentation;
    const numberOfNotes = fretboard[0].length;
    const numberOfStrings = fretboard.length;
    let verticalBoard = [];
    for (let noteNumber=0; noteNumber < numberOfNotes; noteNumber++) {
        let fret = []
            for (let stringNumber=numberOfStrings - 1; stringNumber >= 0; stringNumber--) {
                fret.push(fretboard[stringNumber][noteNumber]);
            }
        verticalBoard.push(fret);
    }
    // console.log(verticalBoard);
    const resultVerticalBoard = verticalBoard.map((fret, index) => 
    <Fret 
    notesArray={fret}
    fretIndex={index}
    rootNote={rootNote}
    key={index}/>);
    return <tbody className='vertical-neck'>{resultVerticalBoard}</tbody>;

}

export default DisplayInstrument