import ScoreCSS from "./Score.module.css";
import Tomato from "../../../Assets/Icons/Tomato.png"
import IMDb from "../../../Assets/Icons/IMDb.png"

function Score(props) {
    return (
    <div className={ScoreCSS.Container} style={{gap: `${props.gap}`}}>
            <div className={ScoreCSS.TomatoContent}>
                <img src={IMDb} />
                <p>{props.points}/100</p>
            </div>
            <div className={ScoreCSS.IMDbContent}>
                <img src={Tomato} />
                <p>{props.pointsTomato}%</p>
            </div>
        </div>
    )
}

export default Score;