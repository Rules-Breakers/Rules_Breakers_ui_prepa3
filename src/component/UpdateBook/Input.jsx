import React from "react";

const Input = (props,) => {
    const {value, handleChange} = props;
    return(
        <>
            <input type="text" className="MyInput" defaultValue={value} onChange={(e) => handleChange(e.target.value)}/>
        </>
    )
}
export default Input;