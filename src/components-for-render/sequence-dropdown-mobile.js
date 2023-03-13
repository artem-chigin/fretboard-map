import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import DropDownOption from "./dropdown"

function SequenceDropDown({typeOfSequence, onSequenceTypeClick, currentSequence}) {
    const sequences = Object.getOwnPropertyNames(MUSIC_CONST[typeOfSequence]);
    const sequenceButtons = sequences.map((sequenceName, index) =>
        <DropDownOption 
            // selectedOption={currentSequence === sequenceName}
            htmlClassName="sequence-name-option"
            optionName={sequenceName}
            handleClickArguments={[sequenceName]}
            handleClick={onSequenceTypeClick}
            key={sequenceName + index}/>
);

    return (
        // <div className="select-mobile">
            // <label htmlFor="sequence-dropdown">Sequence: </label>
            <select 
                name="sequence-dropdown"
                className="dropdown"
                defaultValue={currentSequence}
                >
                {sequenceButtons}
            </select>
        // </div>
)
};

export default SequenceDropDown;