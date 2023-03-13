import instruments from "../instrument-scale-calculations/instruments";
import DropDown from "./dropdown";

function SelectInstrumentMobile({onInstrumentClick}) {
    const instrumentArray = Object.getOwnPropertyNames(instruments);
    const instrumentsDropdown = instrumentArray.map((name, index ) =>
    <DropDown 
        handleClick={onInstrumentClick} 
        handleClickArguments={[instruments[name]]} 
        buttonName={instruments[name].instrumentName}
        key={"instrument" + index} />
)
return (
    <select className="instruments-dropdown">
        {instrumentsDropdown}
    </select>
)

}

export default SelectInstrumentMobile