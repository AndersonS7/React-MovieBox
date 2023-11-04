import ContentFeedCSS from "../ContentFeedMovie/ContentFeedMovie.module.css"
import ChevronLeft from "../../../Assets/Icons/ChevronLeft.png"
import ChevronRight from "../../../Assets/Icons/ChevronRight.png"
import CardVideo from "../../Others/CardVideo/CardVideo";

//temporario
import Lamb from "../../../Assets/Imgs/Video/lamb.png"
import Squad from "../../../Assets/Imgs/Video/The-Suicide-Squad.png"
import Will from "../../../Assets/Imgs/Video/Will-there.png"

function ContentFeedVideo(props) {
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

                <div className={ContentFeedCSS.Cards}>
                    <CardVideo
                        cover={Lamb}
                        title="Lamb (2021) Trailer"
                    />
                    <CardVideo
                        cover={Squad}
                        title="The Suicide Squad : John Cena Interview"
                    />
                    <CardVideo
                        cover={Will}
                        title="Will there be a new era of horror movie?"
                    />
                    
                </div>

                <button className={ContentFeedCSS.ChevronRight}>
                    <img src={ChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default ContentFeedVideo;