import MUSIC_CONST from "../../instrument-scale-calculations/musical-constants"
import Button from "../button";

function SelectRootNote({onNoteClick, currentNoteName}) {

    const notesButtons = MUSIC_CONST.chromaticScale.map((note, index) =>
            <Button 
            toggled={currentNoteName === note} 
            handleClick={onNoteClick} 
            handleClickArguments={[note]} 
            buttonName={note} 
            key={"button" + index}/>
        )
    return (
        <div className="select-note">
            {notesButtons}
        </div>
    )
}


export default SelectRootNote;