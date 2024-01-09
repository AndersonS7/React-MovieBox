import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import stylesCSS from "./index.module.css";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    }

    return (
        <div className={stylesCSS.container}>
            <h2 className={stylesCSS.txtTitle}>MOVIEBOX</h2>
            <div className={stylesCSS.content}>
                <Input className={stylesCSS.txtPlace}
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input className={stylesCSS.txtPlace}
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <span className={stylesCSS.msgError}>{error}</span >
                <Button Text="Entrar" onClick={handleLogin} />
                <div className={stylesCSS.txtLabel}>
                    <p>Não tem uma conta?</p>
                    <div className={stylesCSS.msgStrong}>
                        <Link to="/signup">&nbsp; Registre-se</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;