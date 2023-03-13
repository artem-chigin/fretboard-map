import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import DropDownOption from "./dropdown"

function SelectRootNoteMobile({onNoteClick}) {
    const NoteOptions = MUSIC_CONST.chromaticScale.map((note, index) =>
    <DropDownOption 
        handleClick={onNoteClick}
        handleClickArguments={[note]}
        optionName={note}
        key={"option" + index}
    />)
    return (
        <select className="notes-dropdown">
            {NoteOptions}
        </select>
    )

}

export default SelectRootNoteMobile;