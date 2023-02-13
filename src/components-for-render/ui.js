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
    const [rootNote, setrootNote] = useState("A");
    const [sequenceType, setSequenceType] = useState("note");
    const [sequenceName, setSequenceName] = useState("")
    const [sequence, setSequence] = useState(["A"]);
    
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
        <div className='ui-container'>
            <SelectInstrument 
            onInstrumentClick={(instrumentName) => setCurrentInstrument(instrumentName)}/>
            <SelectRootNote onNoteClick={(keyNote) => createSequence(keyNote, sequenceType, sequenceName)}/>
            <SelectSequenceType onSequenceClick={(typeOfSequence) => {
                setSequenceType(typeOfSequence)
                // setSequenceName("single_note")
                }}/>
            <SequencePanel typeOfPanel={sequenceType} onSequenceTypeClick={(sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}/>
            <DisplayInstrument instrument={currentInstrument}/>
            </div>
        )
}


export default UI;