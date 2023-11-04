import CardMovieCSS from "./CardMovie.module.css"
import Favorite from "../../../Assets/Icons/Favorite.png"
import Score from "../Score/Score.js"

function CardMovie(props) {
    return (
        <div className={CardMovieCSS.Container}>
            <img src={Favorite} className={CardMovieCSS.Favorite}/>
            <img src={props.cover} />
            <span>{props.date}</span>
            <h2>{props.title}</h2>
            <Score 
                points={props.points}
                pointsTomato={props.pointsTomato}
            gap="35%"/>
            <span>{props.category}</span>
        </div>
    )
}

export default CardMovie;