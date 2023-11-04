import CardMovieCSS from "./CardVideo.module.css";

function CardVideo(props) {
    return (
        <div className={CardMovieCSS.Container}>
            <img src={props.cover} />
            <h2>{props.title}</h2>
        </div>
    )
}

export default CardVideo;