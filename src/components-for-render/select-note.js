import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"

const SelectNote = () => {
    const temp = MUSIC_CONST.chromaticScale.map(note => <button>{note}</button>)
    return (
        <div className="select-note">
            {temp}
        </div>
    )
}

export default SelectNote;