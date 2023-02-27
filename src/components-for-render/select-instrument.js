import Button from "./button";
import instruments from "../instrument-scale-calculations/instruments";

function SelectInstrument({onInstrumentClick, currentInstrumentName}) {

    const instr = Object.getOwnPropertyNames(instruments);
    const instrumentsButtons = instr.map((name, index) =>
        <Button 
            toggled={currentInstrumentName === instruments[name].instrumentName}
            handleClick={onInstrumentClick} 
            handleClickArguments={[instruments[name]]}
            buttonName={instruments[name].instrumentName}
            key={"instrument" + index}/>
        )

    return (
        <nav className='select-instrument'>
            {instrumentsButtons}
        </nav>
    )
}

export default SelectInstrument;