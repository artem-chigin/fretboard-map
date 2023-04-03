import Button from "../button";
import MUSIC_CONST from "../../instrument-scale-calculations/musical-constants";


function SelectSequenceType({onSequenceClick, currentSequenceType}) {

    const sequences = Object.getOwnPropertyNames(MUSIC_CONST).slice(2);
    const sequenceTypeButtons = sequences.map((sequenceName, index) => {
        let firstSequenceElement = Object.getOwnPropertyNames(MUSIC_CONST[sequenceName])[0];
        return <Button 
            toggled={currentSequenceType === sequenceName}
            buttonName={sequenceName} 
            handleClickArguments={[sequenceName, firstSequenceElement]} 
            handleClick={onSequenceClick}
            key={"sequence" + sequenceName + index}/>   
    });
 
    return (
        <div className="select-sequence">
            {sequenceTypeButtons}
        </div>
    )
};

export default SelectSequenceType;