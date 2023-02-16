import { useState } from 'react';
import DisplayInstrument from './display-instrument';
import SelectInstrument from './select-instrument';
import SelectRootNote from './select-note';
import SelectSequenceType from './select-sequence';
import SequencePanel from './sequence-panel';
import instruments from "../instrument-scale-calculations/instruments"
import MusicalInstrument from '../instrument-scale-calculations/musical-instrument';
import MUSIC_CONST from '../instrument-scale-calculations/musical-constants';


function UI() {
    const [currentInstrument, setCurrentInstrument] = useState(new MusicalInstrument(instruments.baritoneUke));
    const [rootNote, setrootNote] = useState("G");
    const [sequenceType, setSequenceType] = useState("intervals");
    const [sequenceName, setSequenceName] = useState("p1")
    const [sequence, setSequence] = useState(["G"]);
    
    function createSequence(keyNote=rootNote, seqType=sequenceType, seqName=sequenceName) {
        setrootNote(keyNote); 
        setSequenceType(seqType);
        setSequenceName(seqName);

         if (MUSIC_CONST[seqType].hasOwnProperty(seqName)) {
  
            const newSequence = currentInstrument.generateSeqence([keyNote, 4], MUSIC_CONST[seqType][seqName]);

            setSequence(newSequence);
         }       
    }

    currentInstrument.displaySequence(sequence);

        return (
        <div className='app'>
            <div className='ui'>
                <SelectInstrument 
                onInstrumentClick={(instrumentName) => setCurrentInstrument(instrumentName)}/>
                <SelectRootNote onNoteClick={(keyNote) => createSequence(keyNote, sequenceType, sequenceName)}/>
                <SelectSequenceType onSequenceClick={(sequenceType, sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}/>
                <SequencePanel typeOfPanel={sequenceType} onSequenceTypeClick={(sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}/>
            </div>
            <div className='instrument-container'>
            <DisplayInstrument instrument={currentInstrument}/>
            </div>
        </div>
        )
}


export default UI;