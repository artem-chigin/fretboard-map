import instruments from "../instrument-scale-calculations/instruments";
import DropDownOption from "./dropdown";

function SelectInstrumentMobile({onInstrumentClick, currentInstrumentName}) {
    const instrumentArray = Object.getOwnPropertyNames(instruments);
    const instrumentsDropdown = instrumentArray.map((name, index ) =>
    <DropDownOption 
        selectedOption={currentInstrumentName === instruments[name].instrumentName}
        handleClick={onInstrumentClick} 
        handleClickArguments={[instruments[name]]} 
        optionName={instruments[name].instrumentName}
        key={"instrument" + index} />
)
return (
    // <div className="select-mobile">
        // <label htmlFor="instruments-dropdown">Current instrument: </label>
        <select 
            name="instruments-dropdown"
            className="dropdown"
            defaultValue={currentInstrumentName}>
        {instrumentsDropdown}
        </select>
    // </div>
)

}

export default SelectInstrumentMobile