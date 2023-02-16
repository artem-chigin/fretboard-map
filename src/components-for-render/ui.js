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
    const [sequenceType, setSequenceType] = useState("note");
    const [sequenceName, setSequenceName] = useState("single_note")
    const [sequence, setSequence] = useState(["G"]);
    
    function createSequence(keyNote=rootNote, seqType=sequenceType, seqName=sequenceName) {
         if (MUSIC_CONST[seqType].hasOwnProperty(seqName)) {
  
            const newSequence = currentInstrument.generateSeqence([keyNote, 4], MUSIC_CONST[seqType][seqName]);
            setrootNote(keyNote); 
            setSequenceName(seqName);
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
                <SelectSequenceType onSequenceClick={(typeOfSequence) => setSequenceType(typeOfSequence)}/>
                <SequencePanel typeOfPanel={sequenceType} onSequenceTypeClick={(sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}/>
            </div>
            <div className='instrument-container'>
            <DisplayInstrument instrument={currentInstrument}/>
            </div>
        </div>
        )
}


export default UI;