import CardMovieCSS from "./CardMovie.module.css"
import imgPoster from "../../../Assets/Imgs/PosterImage.png"
import Favorite from "../../../Assets/Icons/Favorite.png"
import Score from "../Score/Score.js"

function CardMovie() {
    return (
        <div className={CardMovieCSS.Container}>
            <img src={Favorite} className={CardMovieCSS.Favorite}/>
            <img src={imgPoster} />
            <span>USA, 2016 - Current</span>
            <h2>Stranger Things</h2>
            <Score gap="35%"/>
            <span>Action, Adventure, Horror</span>
        </div>
    )
}

export default CardMovie;