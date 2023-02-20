import Button from "./button";
import instruments from "../instrument-scale-calculations/instruments";
import MusicalInstrument from "../instrument-scale-calculations/musical-instrument";


function SelectInstrument({onInstrumentClick, currentInstrumentName}) {

     function setInstrument(settings) {
        const musicalInstrument = new MusicalInstrument(settings);
        onInstrumentClick(musicalInstrument);
    }
    const instr = Object.getOwnPropertyNames(instruments);
    const instrumentsButtons = instr.map((name, index) =>
        <Button 
            toggled={currentInstrumentName === instruments[name].instrumentName}
            handleClick={setInstrument} 
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