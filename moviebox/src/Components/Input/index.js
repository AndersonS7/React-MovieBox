import React from "react";
import inputCS from "./index.module.css";
// import * as C from "./styles"

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input className={inputCS}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;