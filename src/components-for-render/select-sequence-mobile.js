import MUSIC_CONST from "../instrument-scale-calculations/musical-constants";
import DropDownOption from "./dropdown";

function SelectSequenceTypeMobile({onSequenceClick}) {
    const sequences = Object.getOwnPropertyNames(MUSIC_CONST).slice(2);
    const sequenceTypeOptions = sequences.map((sequenceName, index) => {
        let firstSequenceElement = Object.getOwnPropertyNames(MUSIC_CONST[sequenceName])[0];
        return <DropDownOption 
            // toggled={currentSequenceType === sequenceName}
            optionName={sequenceName} 
            handleClickArguments={[sequenceName, firstSequenceElement]} 
            handleClick={onSequenceClick}
            key={"sequence" + sequenceName + index}/>
    }
    )
    return (
        <select>
            {sequenceTypeOptions}
        </select>
    );
}

export default SelectSequenceTypeMobile;