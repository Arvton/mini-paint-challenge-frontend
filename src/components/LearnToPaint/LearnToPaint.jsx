import Reference from "../../assets/images/mini-paint-challenge-learn-reference.jpg";
import Painting from "../../assets/images/mini-paint-challenge-learn-painting.jpg";
import "./LearnToPaint.scss";

export default function Hero() {
    return (
        <section className="learn-to-paint">
            <div className="learn-to-paint__divider"></div>
            <div className="learn-to-paint__card">
                <h2 className="learn-to-paint__header">Learn to Paint</h2>
                <img className="learn-to-paint__img" src={Reference} alt="Mini Paint Challenge hero image"></img>
                <img className="learn-to-paint__img" src={Painting} alt="Mini Paint Challenge hero image"></img>
                <p className="learn-to-paint__details">
                    Use my reference photo to finish a mini painting in a 2-3 hour
                    <a className="learn-to-paint__link" target="_blank" rel="noreferrer" href="https://www.youtube.com/playlist?list=PL5bEJWEyy6haAiJ-idr3vbfKRD_2OqsaO"> livestream</a>.
                </p>
            </div>
        </section>
    )
}