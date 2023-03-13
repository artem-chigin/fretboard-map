function DropDown({handleClick, handleClickArguments, buttonName, htmlClassName}) {

    return (
        <option 
        className={htmlClassName}
        // style={currentStyle} 
        onClick={() => handleClick(...handleClickArguments)}>{buttonName}</option>
    )

}

export default DropDown