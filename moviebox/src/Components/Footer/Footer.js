import FooterCSS from "./Footer.module.css"
import FacebookIcon from "../../Assets/Icons/fa-brands_facebook-square.png"
import InstagramIcon from "../../Assets/Icons/fa-brands_instagram.png"
import TwitterIcon from "../../Assets/Icons/fa-brands_twitter.png"
import YouTubeIcon from "../../Assets/Icons/fa-brands_youtube.png"

function Footer() {
    return (
        <div className={FooterCSS.Container}>
            <nav>
                <a href="#">
                    <img src={FacebookIcon} />
                </a>
                <a href="#">
                    <img src={InstagramIcon} />
                </a>
                <a href="#">
                    <img src={TwitterIcon} />
                </a>
                <a href="#">
                    <img src={YouTubeIcon} />
                </a>
            </nav>

            <nav>
                <a href="#" >Conditions of Use</a>
                <a href="#" >Privacy & Policy</a>
                <a href="#" >Press Room</a>
            </nav>

            <span>© 2023 MovieBox by Anderson Silva</span>
        </div>
    )
}

export default Footer;