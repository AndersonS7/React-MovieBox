import React from "react";
import NavBarCSS from "./NavBar.module.css"
import Logo from "../../Assets/Imgs/Logo.png"
import Menu from "../../Assets/Icons/Menu.png"

function NavBar() {
    return (
        <div className={NavBarCSS.Container}> {/*REMOVER ESSE CONTAINER DESSE MODULO E ADICINAR EM UM MODULO GERAL */}
            <div className={NavBarCSS.NavBarContainer}>
                <div>
                    <img src={Logo} alt="Um círculo vermelha com um pequeno simbolo de uma tv no centro, e com o nome MovieBox ao lado, representando a logo"></img>
                </div>
                <div>
                    <input placeholder="O que vai assistir hoje?"></input>
                </div>
                <div>
                    <h2>Sign In</h2>
                    <img src={Menu} alt="Um circulo vervemelho com dois traços brancos ao centro"></img>
                </div>
            </div>
        </div>
    )
}

export default NavBar;