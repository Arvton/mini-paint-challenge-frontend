import HeroImg from "../../assets/images/mini-paint-challenge-hero.jpg";
import ButtonCTA from "../ButtonCTA/ButtonCTA";
import PropTypes from 'prop-types';
import "./Hero.scss";

export default function Hero( { onClick }) {
    return (
        <section className="hero">
            <div className="hero__mobile">
                <img className="hero__mobile-img" src={HeroImg} alt="Mini Paint Challenge hero image"></img>
                <div className="hero__mobile-container">
                    <h2 className="hero__mobile-header">Shrink the canvas. Expand your imagination.</h2>
                    <p className="hero__mobile-details">Create a mini piece of art with me. I will show
                        you how on the Mini Paint Challenge, a free weekly YouTube livestream.</p>
                    <ButtonCTA className="hero__mobile-cta" content="Join the Challenge" onClick={onClick} />
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    onClick: PropTypes.func.isRequired,
}