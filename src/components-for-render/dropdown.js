function DropDownOption({handleClick, handleClickArguments, optionName, htmlClassName}) {

    return (
        <option 
        className={htmlClassName}
        value={handleClickArguments}
        // selected={selectedOption}
        // onClick={() => handleClick(...handleClickArguments)}
        >
            {optionName}
        </option>
    )

}

export default DropDownOption