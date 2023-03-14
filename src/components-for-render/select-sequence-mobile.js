import MUSIC_CONST from "../instrument-scale-calculations/musical-constants";
import DropDownOption from "./dropdown";

function SelectSequenceTypeMobile({onSequenceClick, currentSequenceType}) {
    const sequences = Object.getOwnPropertyNames(MUSIC_CONST).slice(2);
    const sequenceTypeOptions = sequences.map((sequenceName, index) => {
        // let firstSequenceElement = Object.getOwnPropertyNames(MUSIC_CONST[sequenceName])[0];
        return <DropDownOption 
            // selectedOption={currentSequenceType === sequenceName}
            optionName={sequenceName} 
            handleClickArguments={[sequenceName]} 
            // handleClick={onSequenceClick}
            key={"sequence" + sequenceName + index}/>
    }
    )
    return (
        // <div className="select-mobile">
            // <label htmlFor="sequence-type-dropdown">Sequence type: </label>
            <select 
                
                onChange={e => onSequenceClick(e.target.value, Object.getOwnPropertyNames(MUSIC_CONST[e.target.value])[0])}
                name="sequence-type-dropdown"
                className="dropdown"
                defaultValue={currentSequenceType}>
                {sequenceTypeOptions}
            </select>
        // </div>
    );
}

export default SelectSequenceTypeMobile;