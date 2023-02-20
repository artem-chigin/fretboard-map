function Button({toggled, handleClick, handleClickArguments, buttonName, htmlClassName}) {
    const buttonOn = {backgroundColor: "#2A6041", color: "whitesmoke"};
    const buttonOf = {};
    let currentStyle = buttonOf;
    toggled === true ? currentStyle = buttonOn : currentStyle = buttonOf;
    return (
        <button 
        className={htmlClassName}
        style={currentStyle} 
        onClick={() => handleClick(...handleClickArguments)}>{buttonName}</button>
    )

}

export default Button