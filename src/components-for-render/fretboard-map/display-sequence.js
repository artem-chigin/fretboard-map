function DisplaySequence({currentSequence}) {
    return (
<label>{currentSequence.join(" - ")}</label>        
    )
}

export default DisplaySequence;