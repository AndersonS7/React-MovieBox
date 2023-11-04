import TitleCSS from "./Title.module.css"
import Play from "../../../Assets/Icons/Play.png"

function Title() {
    return (
        <div className={TitleCSS.TitleContainer}>
            <h2>John Wick 3: Parabellum</h2>
            {/* adicionar a nota aqui */}
            <p>
                John Wick is on the run after killing a member of the international assassins' guild,
                and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <a href="#">
                <img src={Play} />
                Watch trailer
            </a>
        </div>
    )
}

export default Title;