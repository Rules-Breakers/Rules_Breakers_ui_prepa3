import React from "react";
import "./UpdateBook.css";

const Input = (props,) => {
    const {value, handleChange, type} = props;
    return(
        <>
            <input type={type} className="input1" placeholder={value} onChange={(e) => handleChange(e.target.value)}/>
        </>
    )
}
export default Input;