import "./footer.scss";
import One from "../images/one.jpeg";
import Two from "../images/kiss_scene.jpeg";
import Car from "../images/car_pair_dark.jpeg"
import Three from "../images/three.jpg";
import Celebration from "../images/pair_celebration.jpeg"
import Four from "../images/four.jpeg";

import { Link } from "react-router-dom";
import { Hero } from "./Hero";

export const Footer = () => {
    return <section className="footer-container">
        <Hero />
        <div className="step1">
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/portfolio">Portfolio</Link>
                <Link className="link" to="/press">Press</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
            <div className="contact-details">
            </div>
        </div>
        <div className="images-container">
            <img src={One} />
            <img src={Car} />
            <img src={Celebration} />
            <img src={Four} />
            <img src={Three} />
            <img src={Two} />
        </div>
        <p className="bottom-text">Branding by TPD Design House|Photography Credits|The Le Rêve Films™ name is a trademark of Le Reve Productions Inc</p>
    </section>
}