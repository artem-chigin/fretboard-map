function DropDownOption({handleClickArguments, optionName, htmlClassName}) {

    return (
        <option 
        className={htmlClassName}
        value={handleClickArguments}>
            {optionName}
        </option>
    )

}

export default DropDownOption