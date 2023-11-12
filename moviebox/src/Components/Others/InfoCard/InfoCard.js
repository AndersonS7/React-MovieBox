import React from "react";
import InfoCardCSS from "./InfoCard.module.css"

function InfoCard({ isOpen, setModalOpen, children }) {
    if (isOpen) {
        return (
            <div className={InfoCardCSS.Container}>
                <div className={InfoCardCSS.Modal}>
                    <div>
                        {children}
                    </div>

                    <button onClick={setModalOpen}>Fechar Modal</button>
                </div>
            </div>
        )
    }

    return null
}

export default InfoCard;