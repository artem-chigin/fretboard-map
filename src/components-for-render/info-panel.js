function InfoPanel({rootNote, sequenceType, sequenceName, sequence}) {
    return (
        <div className="info">
            <h1>{rootNote}</h1>
            <p>{sequenceType}</p>
            <p>{sequenceName}</p>
            {/* <label>Generated sequence:</label> */}
            {/* <h2>{sequence.join(" - ")}</h2> */}
        </div>
    )
};

export default InfoPanel;