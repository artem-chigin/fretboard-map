import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import DropDownOption from "./dropdown"

function SelectRootNoteMobile({onNoteClick, currentNoteName}) {
    const NoteOptions = MUSIC_CONST.chromaticScale.map((note, index) =>
    <DropDownOption 
        handleClick={onNoteClick}
        handleClickArguments={[note]}
        optionName={note}
        selectedOption={currentNoteName === note}
        key={"option" + index}
    />)
    return (
        // <div className="select-mobile">
            // <label htmlFor="notes-dropdown">Root note: </label>
            <select 
                name="notes-dropdown"
                className="dropdown"
                defaultValue={currentNoteName}>
                {NoteOptions}
            </select>
        // </div>
    )

}

export default SelectRootNoteMobile;