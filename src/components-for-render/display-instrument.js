import noteColors from "../instrument-scale-calculations/notes-colors";

function DisplayInstrument({instrument, rootNote, isMobile}) {

    if (isMobile === false) {
        return (
            <div className="inner-instrument-container">
                <div className="fretboard">
                    <FretNumbers fretNumbers={instrument.numberOfNotes}/>
                    <FretBoard 
                        fretboard={instrument.instrumentRepresentation}
                        rootNote={rootNote}/>
                </div>
            </div>
            )
        }     
}

function FretNumbers({fretNumbers}) {
    // const fretNubersStyle = {
    //     minWidth: "52px",
    //     display: "inline-block",
    //     textAlign: "center"}
    const numbers = Array.from(Array(fretNumbers + 1).keys()).map((number, index) => 
        <div 
            key={"fretnum" + index}
            className={"fretNumContainer"}>{number}</div>);
    return <div 
                className='fretNumbers'>{numbers}</div>
    
};


function Note({note, noteIndex, stringIndex, rootNote, isVertical}) {
    const noteStyle = {
        backgroundColor: noteColors[note.noteName],
    };

    // const rootNoteStyle = {
    //     widht: "34px",
    //     height: "34px",
    //     backgroundColor: noteColors[note.noteName],
    //     borderRadius: "17px",
    //     border: "solid",
    //     position: "relative",
    //     top: "17px"
    // };


    // let currentNoteStyle = noteStyle;
    if (rootNote === note.noteName) {
        noteStyle.widht = "34px";
        noteStyle.height = "34px";
        noteStyle.borderRadius = "17px";
        noteStyle.border = "solid";
        // noteStyle.top = "17px";
    };
  
    // const noteContainerStyle = {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     minWidth: "50px",
    //     minHeight: "40px",
    //     borderRight: "solid whitesmoke 2px",
    //     borderBottom: "solid black",
    // }
    // const verticalNoteContainerStyle = {
    //     minWidth: "50px",
    //     minHeight: "75px",
    //     borderBottom: "solid whitesmoke 2px",
    //     borderRight: "solid black",
    //     border: "solid"
    // }

    // let currentContainerStyle = noteContainerStyle;
    // if (isVertical) {
    //     currentContainerStyle = verticalNoteContainerStyle;
    //     currentNoteStyle.top = "0";
    //     currentNoteStyle.left = "25px";
    //     // console.log(currentNoteStyle);
    // }

    return (
        <div id={"string" + stringIndex + "note" + noteIndex} 
            className="noteContainer">
            <div className='note' 
                visibility={note.visibility}
                style={noteStyle}>{note.noteName + note.octave}</div>
        </div>
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
    return (
    <div className="string-container">
        <div className="open-string">
            {openStringKey}
        </div>
        <div className="string" id={"string" + stringIndex}>{stringNotesArray}</div>
    </div>
    )
}

function FretBoard({fretboard, rootNote}) {
    const resultBoard = fretboard.map((string, index) =>
    <InstrumentString 
        notesArray={string}
        stringIndex={index} 
        openStringKey={string[0].noteName} 
        key={"string" + index}
        rootNote={rootNote}/>);
    return <div 
                className='neck'>{resultBoard}</div>
}

// function Fret({notesArray, fretIndex, openStringKey, rootNote}) {
//     const fretNotes = notesArray.map((element, index) =>
//     <Note 
//         note={element} 
//         noteIndex={index} 
//         stringIndex={fretIndex} 
//         rootNote={rootNote}
//         key={"vert_note" + index}
//         style={{border: "solid"}}
//         isVertical={true}
//         />)
//     return <div id={"fret" + fretIndex} className="fret">{fretNotes}</div>
// }

// function VerticalFretBoard({fretboard, rootNote}) {
//     const numberOfNotes = fretboard[0].length;
//     const numberOfStrings = fretboard.length;
//     let verticalBoard = [];
//     for (let noteNumber=0; noteNumber < numberOfNotes; noteNumber++) {
//         let fret = []
//             for (let stringNumber=numberOfStrings - 1; stringNumber >= 0; stringNumber--) {
//                 fret.push(fretboard[stringNumber][noteNumber]);
//             }
//         verticalBoard.push(fret);
//     }
//     const resultVerticalBoard = verticalBoard.map((fret, index) => 
//     <Fret 
//     notesArray={fret}
//     fretIndex={index}
//     rootNote={rootNote}
//     key={index}/>);
//     return <div className='vertical-neck'>{resultVerticalBoard}</div>;

// }

export default DisplayInstrument