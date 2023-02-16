import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"

function SequencePanel({typeOfPanel, onSequenceTypeClick}) {
    const sequences = Object.getOwnPropertyNames(MUSIC_CONST[typeOfPanel])
    const sequenceButtons = sequences.map((sequenceName, index) => <button className="sequence-name-buttons" onClick={() => onSequenceTypeClick(sequenceName)} key={"seqType" + index}>{sequenceName}</button>)
    return (
        <div className="sequence-panel">
            {sequenceButtons}
        </div>
    )
}

export default SequencePanel;