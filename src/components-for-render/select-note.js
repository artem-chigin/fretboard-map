import MUSIC_CONST from "../instrument-scale-calculations/musical-constants"
import Button from "./button";

function SelectRootNote({onNoteClick, currentNoteName}) {
    // const toggledButtonStyle = {backgroundColor: "#2A6041", color: "whitesmoke"};


    const notesButtons = MUSIC_CONST.chromaticScale.map((note, index) =>
        
        // (currentNoteName === note) ? <button style={toggledButtonStyle} onClick={() => onNoteClick(note)} key={"button" + index}>{note}</button> :
        // <button onClick={() => onNoteClick(note)} key={"button" + index}>{note}</button>
        <Button 
            toggled={currentNoteName === note} 
            handleClick={onNoteClick} 
            handleClickArguments={note} 
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