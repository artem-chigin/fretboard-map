import instruments from "../../instrument-scale-calculations/instruments";
import DropDownOption from "../dropdown";

function SelectInstrumentMobile({onInstrumentChange, currentInstrumentName}) {
    const instrumentArray = Object.getOwnPropertyNames(instruments);
    const instrumentsDropdown = instrumentArray.map((name, index ) =>
    <DropDownOption 
        handleClickArguments={name} 
        optionName={instruments[name].instrumentName}
        key={"instrument" + index} />
    )
    return (
            <select
                value={currentInstrumentName}
                onChange={e => onInstrumentChange(instruments[e.target.value])}
                name="instruments-dropdown"
                className="dropdown"
                >
            {instrumentsDropdown}
            </select>
    )

}

export default SelectInstrumentMobile