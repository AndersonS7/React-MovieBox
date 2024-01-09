import React from "react";
import buttonCSS from "./index.module.css";

const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <button className={buttonCSS} type={Type} onClick={onClick}>
            {Text}
        </button>
    );
};

export default Button;