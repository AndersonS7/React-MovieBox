import CardMovie from "../Others/CardMovie/CardMovie.js";
import CardVideo from "../Others/CardVideo/CardVideo.js"
import ContentFeedMovie from "./ContentFeedMovie/ContentFeedMovie.js";
import FeedCSS from "./Feed.module.css";

//imagens temporárias filmes
import StrangerThings from "../../Assets/Imgs/StrangerThings.png"
import Batman from "../../Assets/Imgs/Batman.png"
import SpiderMan from "../../Assets/Imgs/Spider-Man.png"
import Dunkirk from "../../Assets/Imgs/Dunkirk.png"
import Dune from "../../Assets/Imgs/Dune.png"
import NoTime from "../../Assets/Imgs/No-Time-To-Die.png"
import ShangChi from "../../Assets/Imgs/Shang-Chi.png"
import Breathe2 from "../../Assets/Imgs/Breathe2.png"

//imagens temporárias videos
import Lamb from "../../Assets/Imgs/Video/lamb.png"
import Squad from "../../Assets/Imgs/Video/The-Suicide-Squad.png"
import Will from "../../Assets/Imgs/Video/Will-there.png"

//imagens temporárias atores
import Keanu from "../../Assets/Imgs/Casts/KeanuReeves.png"
import Ryan from "../../Assets/Imgs/Casts/Ryan-Reynolds.png"
import Timo from "../../Assets/Imgs/Casts/Timothée-Chalamet.png"
import Chloe from "../../Assets/Imgs/Casts/Chloë-Grace-Moretz.png"

function Feed() {
    return (
        <div className={FeedCSS.Container}>

            {/* movies */}
            <ContentFeedMovie
                title="Feactured Movie">

                <CardMovie
                    cover={StrangerThings}
                    title="Stranger Things"
                    date="USA, 2016 - Current"
                    category="Action, Adventure, Horror"

                    points="86.0"
                    pointsTomato="97"
                />

                <CardMovie
                    cover={Batman}
                    title="Batman Begins"
                    date="USA, 2005"
                    category="Action, Adventure"

                    points="82.0"
                    pointsTomato="70"
                />

                <CardMovie
                    cover={SpiderMan}
                    title="Spider-Man : Into The Spider Verse"
                    date="USA, 2018"
                    category="Animation, Action, Adventure"

                    points="84.0"
                    pointsTomato="87"
                />

                <CardMovie
                    cover={Dunkirk}
                    title="Dunkirk"
                    date="USA, 2017"
                    category="Action, Drama, History"

                    points="78.0"
                    pointsTomato="94"
                />

            </ContentFeedMovie>

            {/* New Arrival */}
            <ContentFeedMovie
                title="New Arrival">

                <CardMovie
                    cover={Dune}
                    title="Dune"
                    date="USA, 2021"
                    category="Action, Adventure, Drama"

                    points="84.0"
                    pointsTomato="75"
                />

                <CardMovie
                    cover={NoTime}
                    title="No Time To Die"
                    date="USA, 2021"
                    category="Action, Adventure, Thriller"

                    points="76.0"
                    pointsTomato="68"
                />

                <CardMovie
                    cover={ShangChi}
                    title="Shang-Chi and the Legend of the Ten Rings"
                    date="USA, 2021"
                    category="Action, Adventure, Fantasy"

                    points="79.0"
                    pointsTomato="71"
                />

                <CardMovie
                    cover={Breathe2}
                    title="Don't Breathe 2"
                    date="USA, 2021"
                    category="Action, Drama, Horror"

                    points="61.0"
                    pointsTomato="46"
                />

            </ContentFeedMovie>

            {/* Exclusive Videos */}
            <ContentFeedMovie
                title="Exclusive Videos">

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

            </ContentFeedMovie>

            {/* Exclusive Videos */}
            <ContentFeedMovie
                title="Featured Casts">

                <CardVideo
                    cover={Keanu}
                    title="Keanu Reeves"
                />

                <CardVideo
                    cover={Ryan}
                    title="Ryan Reynolds"
                />

                <CardVideo
                    cover={Timo}
                    title="Timothée Chalamet"
                />

                <CardVideo
                    cover={Chloe}
                    title="Chloë Grace Moretz"
                />

            </ContentFeedMovie>
        </div>
    )
}

export default Feed;