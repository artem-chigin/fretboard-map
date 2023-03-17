import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import DropDownOption from "./dropdown"

function SelectRootNoteMobile({onNoteChange, currentNoteName}) {
    const NoteOptions = MUSIC_CONST.chromaticScale.map((note, index) =>
    <DropDownOption 
        handleClickArguments={note}
        optionName={note}
        key={"option" + index}/>
    )
    return (
            <select 
                value={currentNoteName}
                onChange={e => onNoteChange(e.target.value)}
                name="notes-dropdown"
                className="dropdown">
                {NoteOptions}
            </select>
    )

}

export default SelectRootNoteMobile;