import React from "react";
import SectionTopCSS from "./SectionTop.module.css";
import NavBar from "./NavBar/NavBar";
import Title from "./Title/Title";

function SectionTop() {
    return (
        <div className={SectionTopCSS.bg}>
            <div className={SectionTopCSS.Content}>
                <NavBar />
                <Title />
            </div>
        </div>
    )
}

export default SectionTop;