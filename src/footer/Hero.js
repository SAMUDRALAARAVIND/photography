import { FacebookFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import Logo from "../images/logo.png";
import "./hero.scss";

export const Hero = () => {
    return <div className="hero">
        <p className="desc">{'INTERNATIONAL CINEMATIC \n WEDDING FILMMAKING'}</p>
        <img src={Logo} />
        <div className="social-links">
            <a href="https://linkedin.com"><LinkedinFilled /></a>
            <a href="https://instagram.com"><InstagramFilled /></a>
            <a href="https://facebook.com"><FacebookFilled /></a>
            <span style={{ fontFamily: "cursive" }}>inspire</span>
        </div>
    </div>
}