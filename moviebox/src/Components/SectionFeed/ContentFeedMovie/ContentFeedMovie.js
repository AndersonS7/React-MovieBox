import ContentFeedCSS from "../ContentFeedMovie/ContentFeedMovie.module.css"
import ChevronLeft from "../../../Assets/Icons/ChevronLeft.png"
import ChevronRight from "../../../Assets/Icons/ChevronRight.png"

function ContentFeedMovie(props) {
    return (
        <div className={ContentFeedCSS.Container}>
            <div className={ContentFeedCSS.Title}>
                <h2>{props.title}</h2>
                <a href="#">See more</a>
            </div>

            <div className={ContentFeedCSS.CardsContainer}>
                <button className={ContentFeedCSS.ChevronLeft}>
                    <img src={ChevronLeft} />
                </button>

                {/* está recebendo os cards filhos que vem do feed */}
                <div className={ContentFeedCSS.Cards} style={{ overflow: `${props.overflow}`, gap: `${props.gap}` }}>
                    {props.children}
                </div>

                <button className={ContentFeedCSS.ChevronRight}>
                    <img src={ChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default ContentFeedMovie;