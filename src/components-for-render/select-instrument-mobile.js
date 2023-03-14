import instruments from "../instrument-scale-calculations/instruments";
import DropDownOption from "./dropdown";

function SelectInstrumentMobile({onInstrumentClick, currentInstrumentName}) {
    const instrumentArray = Object.getOwnPropertyNames(instruments);
    const instrumentsDropdown = instrumentArray.map((name, index ) =>
    <DropDownOption 
        // selectedOption={currentInstrumentName === instruments[name].instrumentName}
        // handleClick={onInstrumentClick} 
        handleClickArguments={name} 
        optionName={instruments[name].instrumentName}
        key={"instrument" + index} />
)
return (
        <select 
            onChange={e => onInstrumentClick(instruments[e.target.value])}
            name="instruments-dropdown"
            className="dropdown"
            defaultValue={currentInstrumentName}>
        {instrumentsDropdown}
        </select>
)

}

export default SelectInstrumentMobile