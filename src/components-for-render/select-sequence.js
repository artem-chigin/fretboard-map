function SelectSequenceType({onSequenceClick}) {
 
    return (
        <div className="select-sequence">
            <button onClick={() => onSequenceClick("intervals", "p1")}>Single note</button>
            <button onClick={() => onSequenceClick("intervals", "p1")}>Intervals</button>
            <button onClick={() => onSequenceClick("chords", "major")}>Chords</button>
            <button onClick={() => onSequenceClick("scales", "major")}>Scales</button>
        </div>
    )
};

export default SelectSequenceType;