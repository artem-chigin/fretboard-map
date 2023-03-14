import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import DropDownOption from "./dropdown"

function SequenceDropDown({onSequenceChange, typeOfSequence, currentSequence}) {
    const sequences = Object.getOwnPropertyNames(MUSIC_CONST[typeOfSequence]);
    const sequenceButtons = sequences.map((sequenceName, index) =>
        <DropDownOption 
            htmlClassName="sequence-name-option"
            optionName={sequenceName}
            handleClickArguments={sequenceName}
            key={sequenceName + index}/>
);

    return (
            <select 
            onChange={e => onSequenceChange(e.target.value)}

                name="sequence-dropdown"
                className="dropdown"
                defaultValue={currentSequence}
                >
                {sequenceButtons}
            </select>
)
};

export default SequenceDropDown;