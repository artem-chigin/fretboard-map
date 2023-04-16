import MUSIC_CONST from "../../instrument-scale-calculations/musical-constants";
import MusicalInstrument from "../../instrument-scale-calculations/musical-instrument";

// const elementStyle = {border: "solid", width: "100px", height: "100px", boxSizing: "content-box"};


function CircleElement({scale, idName}) {

    return (
        <div className={"circle-element"} id={idName}>
            <div id={"outer-" + idName}> {scale[0]} </div>
            <div id={"inner-" + idName}> {scale[5] + "m"} </div>
        </div>
    )
}

function DisplayCircle() {
    let scales = {};
    let sharpFlag = true;

    const instrument = new MusicalInstrument({instrumentName: "", fretsNumber: 12, tuning: ["C1"]})

    let noteIndex = 0;
    while (Object.keys(scales).length < 12) {
        if (Object.keys(scales).length > 6) {
            sharpFlag = false;
        }
        let rootNote = MUSIC_CONST.chromaticScale[noteIndex];
        scales[rootNote] = instrument.generateSeqence([rootNote, 1], MUSIC_CONST.scales.major, sharpFlag);
        noteIndex = (noteIndex + MUSIC_CONST.intervals.p5[0]) % MUSIC_CONST.notesInChromaticScale;
    }

    function renameNote(noteName) {
        if (noteName.includes("#")) {
            return noteName.replace("#", "-sharp");
        }
        if (noteName.includes("b")) {
            return noteName.replace("b", "-flat");
        }
        return noteName
    }

    const displayScales = Object.keys(scales).map((note, index) =>
        <CircleElement 
            scale={scales[note]} 
            key={"scale" + index}
            idName={"scale-" + renameNote(scales[note][0])}/>
        )

        // console.log(displayScales[0]);
    return <div className="circle-of-fifths-container">
                {displayScales}
                <div className="inner-circle"></div>
                
            </div>
}

export default DisplayCircle;