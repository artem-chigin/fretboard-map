function DropDownOption({handleClick, handleClickArguments, optionName, htmlClassName}) {

    return (
        <option 
        className={htmlClassName}
        // style={currentStyle} 
        onClick={() => handleClick(...handleClickArguments)}>{optionName}</option>
    )

}

export default DropDownOption