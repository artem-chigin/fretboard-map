import noteColors from "../../instrument-scale-calculations/notes-colors";

function DisplayInstrument({ instrument, rootNote, isMobile }) {
  if (isMobile === false) {
    return (
      <div className="inner-instrument-container">
        <div className="fretboard">
          <FretBoard
            fretboard={instrument.instrumentRepresentation}
            rootNote={rootNote}
          />
          <FretNumbers fretNumbers={instrument.numberOfNotes} />
        </div>
      </div>
    );
  }
}

function FretNumbers({ fretNumbers }) {
  // const fretNubersStyle = {
  //     minWidth: "52px",
  //     display: "inline-block",
  //     textAlign: "center"}
  const oneDottedFrets = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
  const twoDottedFrets = new Set([12, 24]);
  const numbers = Array.from(Array(fretNumbers + 1).keys()).map(
    (number, index) => (
      <div key={"fretnum" + index} className={"fretNumContainer"}>
        <div>
          {oneDottedFrets.has(number)
            ? "●"
            : twoDottedFrets.has(number)
            ? "●●"
            : ""}
        </div>
        <div>{number}</div>
      </div>
    )
  );
  return <div className="fretNumbers">{numbers}</div>;
}

function Note({ note, noteIndex, stringIndex, rootNote, isVertical }) {
  const noteStyle = {
    backgroundColor: noteColors[note.noteName],
  };

  const noteClassNames = { note: "note", rootNote: "root-note" };
  let noteClass = "";

  if (rootNote === note.noteName) {
    noteClass = noteClassNames.rootNote;
  } else {
    noteClass = noteClassNames.note;
  }

  return (
    <div
      id={"string" + stringIndex + "note" + noteIndex}
      className="noteContainer"
    >
      <div className={noteClass} visibility={note.visibility} style={noteStyle}>
        {note.noteName + note.octave}
      </div>
    </div>
  );
}

function InstrumentString({
  notesArray,
  stringIndex,
  openStringKey,
  rootNote,
}) {
  const stringNotesArray = notesArray.map((element, index) => (
    <Note
      note={element}
      noteIndex={index}
      stringIndex={stringIndex}
      rootNote={rootNote}
      key={"note" + index}
    />
  ));
  return (
    <div className="string-container">
      <div className="open-string">{openStringKey}</div>
      <div className="string" id={"string" + stringIndex}>
        {stringNotesArray}
      </div>
    </div>
  );
}

function FretBoard({ fretboard, rootNote }) {
  const resultBoard = fretboard.map((string, index) => (
    <InstrumentString
      notesArray={string}
      stringIndex={index}
      openStringKey={string[0].noteName}
      key={"string" + index}
      rootNote={rootNote}
    />
  ));
  return <div className="neck">{resultBoard}</div>;
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

export default DisplayInstrument;
