import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"

function SelectNote({onInstrumentClick}) {
    const notesButtons = MUSIC_CONST.chromaticScale.map(note => <button onClick={() => onInstrumentClick(note)}>{note}</button>)
    return (
        <div className="select-note">
            {notesButtons}
        </div>
    )
}

export default SelectNote;