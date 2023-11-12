import { useState } from "react";
import CardMovieCSS from "./CardMovie.module.css"
import Favorite from "../../../Assets/Icons/Favorite.png"
import Score from "../Score/Score.js"
import InfoCard from "../InfoCard/InfoCard.js";

function CardMovie(props) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className={CardMovieCSS.Container} onClick={() => setOpenModal(true)}>
                <img src={Favorite} className={CardMovieCSS.Favorite} />
                <div className={CardMovieCSS.imgCover}>
                    <img src={props.cover} />
                </div>
                <span>{props.date}</span>
                <h2>{props.title}</h2>
                <Score
                    points={props.points}
                    pointsTomato={props.pointsTomato}
                    gap="35%" />
                <span>{props.category}</span>
            </div>

            {/* MODAL DE INFORMAÇÕES */}
            <InfoCard isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <div className={CardMovieCSS.imgCover}>
                    <img src={props.cover} />
                </div>
                <h2>{props.title}</h2>
                <span>{props.category}</span> | <span>{props.date}</span>
                <p>
                    Adicionar aqui a descrição uma descrição bem legal do filme...
                </p>
                <p>Autores: Autor 1, Autor 2, Autor 3</p>
            </InfoCard>
        </div>
    )
}

export default CardMovie;