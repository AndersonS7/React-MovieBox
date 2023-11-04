import ContentFeedCSS from "../ContentFeedCasts/ContentFeedCasts.module.css";
import ChevronLeft from "../../../Assets/Icons/ChevronLeft.png";
import ChevronRight from "../../../Assets/Icons/ChevronRight.png";
import CardVideo from "../../Others/CardVideo/CardVideo";

// temporario
import KeanuReeves from "../../../Assets/Imgs/Casts/KeanuReeves.png";
import RyanReynolds from "../../../Assets/Imgs/Casts/Ryan-Reynolds.png";
import TimotheeChalamet from "../../../Assets/Imgs/Casts/Timothée-Chalamet.png";
import ChloeGrace from "../../../Assets/Imgs/Casts/Chloë-Grace-Moretz.png";

function ContentFeedCasts(props) {
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
                        cover={KeanuReeves}
                        title="Keanu Reeves"
                    />
                    <CardVideo
                        cover={RyanReynolds}
                        title="Ryan Reynolds"
                    />
                    <CardVideo
                        cover={TimotheeChalamet}
                        title="Timothée Chalamet"
                    />
                    <CardVideo
                        cover={ChloeGrace}
                        title="Chloë Grace Moretz"
                    />
                </div>

                <button className={ContentFeedCSS.ChevronRight}>
                    <img src={ChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default ContentFeedCasts;