import HeroImg from "../../assets/images/mini-paint-challenge-hero.jpg";
import ButtonCTA from "../ButtonCTA/ButtonCTA";
import PropTypes from 'prop-types';
import "./Hero.scss";

export default function Hero({ onClick }) {
    return (
        <section className="hero">
            <img className="hero__img" src={HeroImg} alt="Mini Paint Challenge hero image"></img>
            <div className="hero__container">
                <h2 className="hero__header">Shrink the canvas. Expand your imagination.</h2>
                <p className="hero__details">Explore the world of mini paintings every week during my free LIVE painting lessons.</p>
                <ButtonCTA className="hero__cta" content="Join the Challenge" onClick={onClick} />
            </div>
        </section>
    )
}

Hero.propTypes = {
    onClick: PropTypes.func.isRequired,
}