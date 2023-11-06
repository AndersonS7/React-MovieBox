import React, { useRef } from "react"
import ContentFeedCSS from "../ContentFeedMovie/ContentFeedMovie.module.css"
import ChevronLeft from "../../../Assets/Icons/ChevronLeft.png"
import ChevronRight from "../../../Assets/Icons/ChevronRight.png"

function ContentFeedMovie(props) {

    const divRef = useRef(null);

    const moveRight = () => {
        divRef.current.scrollLeft += 250; // Mova 50 pixels para a direita (ajuste conforme necessário)
    }

    const moveLeft = () => {
        divRef.current.scrollLeft -= 250; // Mova 50 pixels para a esquerda (ajuste conforme necessário)
    }

    return (
        <div className={ContentFeedCSS.Container}>
            <div className={ContentFeedCSS.Title}>
                <h2>{props.title}</h2>
                <a href="#">See more</a>
            </div>

            <div className={ContentFeedCSS.CardsContainer}>
                <button className={ContentFeedCSS.ChevronLeft} onClick={moveLeft}>
                    <img src={ChevronLeft} />
                </button>

                {/* está recebendo os cards filhos que vem do feed */}
                <div className={ContentFeedCSS.Cards}
                    style={{ overflow: `${props.overflow}`, gap: `${props.gap}` }}
                    ref={divRef}>
                    {props.children}
                </div>

                <button className={ContentFeedCSS.ChevronRight} onClick={moveRight}>
                    <img src={ChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default ContentFeedMovie;