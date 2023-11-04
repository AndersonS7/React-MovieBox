import ScoreCSS from "./Score.module.css";
import Tomato from "../../../Assets/Icons/Tomato.png"
import IMDb from "../../../Assets/Icons/IMDb.png"

function Score() {
    return (
        <div className={ScoreCSS.Container}>
            <div className={ScoreCSS.TomatoContent}>
                <img src={IMDb} />
                <p>86.0/100</p>
            </div>
            <div className={ScoreCSS.IMDbContent}>
                <img src={Tomato} />
                <p>97%</p>
            </div>
        </div>
    )
}

export default Score;