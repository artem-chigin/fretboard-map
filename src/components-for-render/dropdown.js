function DropDownOption({handleClick, handleClickArguments, optionName, htmlClassName, selectedOption}) {

    return (
        <option 
        className={htmlClassName}
        // selected={selectedOption}
        onClick={() => handleClick(...handleClickArguments)}>{optionName}</option>
    )

}

export default DropDownOption