import React from "react";
import InfoCardCSS from "./InfoCard.module.css"

function InfoCard({ isOpen, setModalOpen, children }) {
    if (isOpen) {
        return (
            <div className={InfoCardCSS.Container}>
                <div className={InfoCardCSS.Modal}>
                    <div className={InfoCardCSS.Content}>
                        {children}
                    </div>
                    <button className={InfoCardCSS.Close} onClick={setModalOpen}>X</button>
                </div>
            </div>
        )
    }

    return null
}

export default InfoCard;