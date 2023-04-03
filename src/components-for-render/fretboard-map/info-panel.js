// import DisplaySequence from "./display-sequence";

function InfoPanel({rootNote, sequenceType, sequenceName, currentSequence, instrumentName}) {
    return (
        <div className="info">
            <p>{instrumentName}</p>
            <h1>{rootNote}</h1>
            <p>{sequenceType}</p>
            <p>{sequenceName}</p>
        </div>
    )
};

export default InfoPanel;