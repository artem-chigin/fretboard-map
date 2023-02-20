function Button({toggled, handleClick, value}) {
    const buttonOn = {backgroundColor: "#2A6041", color: "whitesmoke"};
    const buttonOf = {};
    let currentStyle = buttonOf;
    toggled === true ? currentStyle = buttonOn : currentStyle = buttonOf;
    return (
        <button style={currentStyle} onClick={() => handleClick(value)}>{value}</button>
    )

}

export default Button