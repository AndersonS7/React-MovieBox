import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import stylesCSS from "./index.module.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }

    return (
        <div className={stylesCSS.container}>
            <h2 className={stylesCSS.txtTitle}>CRIE SUA CONTA</h2>
            <div className={stylesCSS.content}>
                <Input className={stylesCSS.txtPlace}
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input className={stylesCSS.txtPlace}
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />

                <Input className={stylesCSS.txtPlace}
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <span className={stylesCSS.msgError}>{error}</span >
                <Button Text="Inscrever-se" onClick={handleSignup} />
                <div className={stylesCSS.txtLabel}>
                    <p>Já tem uma conta?</p>
                    <div className={stylesCSS.msgStrong}>
                        <Link to="/">&nbsp; Entre</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signup;