import { useState } from 'react';
import DisplayInstrument from './display-instrument';
import SelectInstrument from './select-instrument';
import SelectNote from './select-note';
import SelectSequence from './select-sequence';
import instruments from "../instrument-scale-calculations/instruments"
import MusicalInstrument from '../instrument-scale-calculations/musical-instrument';


function UI() {
    const [currentInstrument, setCurrentInstrument] = useState(new MusicalInstrument(instruments.baritoneUke));
    const [rootNote, setrootNote] = useState("A");

    currentInstrument.findNote(rootNote);

        return (
        <div className='ui-container'>
            <SelectInstrument 
            onInstrumentClick={(value) => setCurrentInstrument(value)}/>
            <SelectNote onInstrumentClick={(value) => setrootNote(value)}/>
            <SelectSequence />
            <DisplayInstrument instrument={currentInstrument}/>
            </div>
        )
}


export default UI;