import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"

function SelectRootNote({onNoteClick}) {
    const notesButtons = MUSIC_CONST.chromaticScale.map((note, index) => <button onClick={() => onNoteClick(note)} key={"button" + index}>{note}</button>)
    return (
        <div className="select-note">
            {notesButtons}
        </div>
    )
}

export default SelectRootNote;