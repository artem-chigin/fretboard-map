import MUSIC_CONST from "./musical-constants";

let noteColors = {};

let hue = 0;
const hueDelta = 360 /12;
let saturation = "80%";
let lightness = "70%";

for (let noteName of MUSIC_CONST.chromaticScale) {
    noteColors[noteName] = `hsl(${hue}, ${saturation}, ${lightness})`
    hue += hueDelta;
};

console.log(noteColors);


// const noteColors = {
//     "C": "maroon",
//     "C#": "darkmagenta",
//     "Db": "darkmagenta",
//     "D": "goldenrod",
//     "D#": "mediumvioletred",
//     "Eb": "mediumvioletred",
//     "E": "skyblue",
//     "F": "firebrick",
//     "F#": "slateblue",
//     "Gb": "slateblue",
//     "G": "chocolate",
//     "G#": "mediumpurple",
//     "Ab": "mediumpurple",
//     "A": "#2A6041",
//     "A#": "indianred",
//     "Bb": "indianred",
//     "B": "royalblue"
// }

// const noteColors = {
//     "C": "#BA0000",
//     "C#": "#6900BA",
//     "Db": "#6900BA",
//     "D": "#BABA00",
//     "D#": "#863365",
//     "Eb": "#863365",
//     "E": "#8EB1BA",
//     "F": "#740001",
//     "F#": "#5D65B9",
//     "Gb": "#5D65B9",
//     "G": "#BA5D00",
//     "G#": "#8955B8",
//     "Ab": "#8955B8",
//     "A": "#259525",
//     "A#": "#7B4B5B",
//     "Bb": "#7B4B5B",
//     "B": "#6893BA"
// }

export default noteColors;