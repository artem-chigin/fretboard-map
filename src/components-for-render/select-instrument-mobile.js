import instruments from "../instrument-scale-calculations/instruments";
import DropDownOption from "./dropdown";

function SelectInstrumentMobile({onInstrumentClick}) {
    const instrumentArray = Object.getOwnPropertyNames(instruments);
    const instrumentsDropdown = instrumentArray.map((name, index ) =>
    <DropDownOption 
        handleClick={onInstrumentClick} 
        handleClickArguments={[instruments[name]]} 
        optionName={instruments[name].instrumentName}
        key={"instrument" + index} />
)
return (
    <select className="instruments-dropdown">
        {instrumentsDropdown}
    </select>
)

}

export default SelectInstrumentMobile