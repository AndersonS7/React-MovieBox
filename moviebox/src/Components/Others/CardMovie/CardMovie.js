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
                {/* <img src={Favorite} className={CardMovieCSS.Favorite} /> */}
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
                <img src={props.cover} />
                <div>
                    <h2>{props.title}</h2>
                    <span>{props.category} | </span>
                    <span>{props.date}</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tortor nisi. Duis eu magna mollis sem pretium viverra. Suspendisse consectetur sollicitudin elit ac laoreet.
                    Vestibulum et urna orci. Donec enim ex, tempor in mollis eget, tempor vitae lacus. Vivamus efficitur purus metus, eu feugiat ipsum imperdiet non.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean fermentum vel enim ac tincidunt.
                    Cras augue turpis, venenatis id ex sed, semper venenatis lacus.
                </p>
                <span>
                    <p>Autor: Autor De um Filme</p>
                </span>
            </InfoCard>
        </div>
    )
}

export default CardMovie;