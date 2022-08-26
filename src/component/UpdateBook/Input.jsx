import React from "react";
import "./UpdateBook.css";

const Input = (props,) => {
    const {value, handleChange} = props;
    return(
        <>
            <input type="text" className="input1" placeholder={value} onChange={(e) => handleChange(e.target.value)}/>
        </>
    )
}
export default Input;