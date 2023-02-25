import { useState } from 'react';
import DisplayInstrument from './display-instrument';
import SelectInstrument from './select-instrument';
import SelectRootNote from './select-note';
import SelectSequenceType from './select-sequence';
import SequencePanel from './sequence-panel';
import InfoPanel from './info-panel';
import instruments from "../instrument-scale-calculations/instruments"
import MusicalInstrument from '../instrument-scale-calculations/musical-instrument';
import MUSIC_CONST from '../instrument-scale-calculations/musical-constants';
import DisplaySequence from './display-sequence';


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
            <div className='ui-and-info'>
                <div className='ui'>
                    <SelectInstrument 
                        onInstrumentClick={(instrumentName) => setCurrentInstrument(instrumentName)}
                        currentInstrumentName={currentInstrument.instrumentName}/>
                    <SelectRootNote 
                        onNoteClick={(keyNote) => createSequence(keyNote, sequenceType, sequenceName)}
                        currentNoteName={rootNote}/>
                    <SelectSequenceType 
                        onSequenceClick={(sequenceType, sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}
                        currentSequenceType={sequenceType}/>
                    <SequencePanel 
                        typeOfPanel={sequenceType} 
                        currentSequence={sequenceName}
                        onSequenceTypeClick={(sequenceName) => createSequence(rootNote, sequenceType, sequenceName)}/>
                </div>
                    <InfoPanel 
                        rootNote={rootNote} 
                        sequenceType={sequenceType} 
                        sequenceName={sequenceName} 
                        sequence={sequence} 
                        instrumentName={currentInstrument.instrumentName}
                        currentSequence={sequence}/>
                </div>
                <div className='sequence'>
                    <DisplaySequence currentSequence={sequence}/>
                    </div>
                <div className='instrument-container'>
                    <DisplayInstrument instrument={currentInstrument}/>
                </div>
        </div>
        )
}


export default UI;