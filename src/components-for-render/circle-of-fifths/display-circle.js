import MUSIC_CONST from "../../instrument-scale-calculations/musical-constants";
import MusicalInstrument from "../../instrument-scale-calculations/musical-instrument";


function CircleElement({majorScaleName, minorScaleName}) {

    // const instrumentSettings = {instrumentName: "default", fretsNumber: 24, tuning: ["C1"]};
    // const instrument = new MusicalInstrument(instrumentSettings);

    return (
        <div className="circle-element" style={{border: "solid", width: "185px", boxSizing: "content-box"}}>
            <div> {majorScaleName} </div>
            <div> {minorScaleName + "m"} </div>
        </div>
    )
}

function DisplayCircle() {
    const scales = [];
    let sharpFlag = true;

    const instrument = new MusicalInstrument({instrumentName: "", fretsNumber: 12, tuning: ["C1"]})

    let noteIndex = 0;
    while (scales.length < 12) {
        if (scales.length > 6) {
            sharpFlag = false;
        }
        scales.push([instrument.generateSeqence([MUSIC_CONST.chromaticScale[noteIndex], 1], MUSIC_CONST.scales.major, sharpFlag)]);
        noteIndex = (noteIndex + MUSIC_CONST.intervals.p5[0]) % MUSIC_CONST.notesInChromaticScale;
    }

    const displayScales = scales.map((scale, index) =>
        <CircleElement 
        majorScaleName={scale[0][0]} minorScaleName={scale[0][5]} 
        key={"scale" + index}/>
        )
    return <div 
            style={{display: "flex", width: "600px", flexWrap: "wrap"}}
            >{displayScales}</div>
}

export default DisplayCircle;