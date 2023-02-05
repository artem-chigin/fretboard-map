import instruments from "../instrument-scale-calculations/instruments";
import MusicalInstrument from "../instrument-scale-calculations/musical-instrument";

function SelectInstrument({onInstrumentClick}) {

    function setInstrument(settings) {
        const musicalInstrument = new MusicalInstrument(settings);
        onInstrumentClick(musicalInstrument);
    }

    return (
        <nav className='select-instrument'>
            <button onClick={() => setInstrument(instruments.baritoneUke)}>Bariton ukelele</button>
            <button onClick={() => setInstrument(instruments.standartUke)}>Ukelele</button>
            <button onClick={() => setInstrument(instruments.guitar)}>Guitar</button>
            <button onClick={() => setInstrument(instruments.bassGuitar)}>Bass guitar</button>
        </nav>
    )
}

export default SelectInstrument;