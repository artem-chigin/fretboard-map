import MUSIC_CONST from "../instrument-scale-calculations/musical-constants";

const SelectSequence = () => {
    return (
        <div className="select-sequence">
            <button>Single note</button>
            <button>Intervals</button>
            <button>Chords</button>
            <button>Scales</button>
        </div>
    )
}

export default SelectSequence;