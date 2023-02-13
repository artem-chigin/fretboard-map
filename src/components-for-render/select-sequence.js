function SelectSequenceType({onSequenceClick}) {

    return (
        <div className="select-sequence">
            <button onClick={() => onSequenceClick("note")}>Single note</button>
            <button onClick={() => onSequenceClick("intervals")}>Intervals</button>
            <button onClick={() => onSequenceClick("chords")}>Chords</button>
            <button onClick={() => onSequenceClick("scales")}>Scales</button>
        </div>
    )
}

export default SelectSequenceType;