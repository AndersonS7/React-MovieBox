import React from "react";
import NavBarCSS from "./NavBar.module.css"
import Logo from "../../../Assets/Imgs/Logo.png"
import Search from "../../../Assets/Icons/Search.png"

function NavBar() {
    return (
        <header className={NavBarCSS.Container}> {/*REMOVER ESSE CONTAINER DESSE MODULO E ADICINAR EM UM MODULO GERAL */}
            <nav className={NavBarCSS.NavBarContainer}>
                <a href="#">
                    <img src={Logo} alt="Um círculo vermelha com um pequeno simbolo de uma tv no centro, e com o nome MovieBox ao lado, representando a logo"></img>
                </a>
                <div className={NavBarCSS.InputContainer}>
                    <input placeholder="What do you want to watch?" />
                    <button type="submit" className={NavBarCSS.BtnSearch}>
                        <img src={Search} alt="icone de uma lupa branca"></img>
                    </button>
                </div>
                <div className={NavBarCSS.SingIn}>
                    <button>Sign In</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;