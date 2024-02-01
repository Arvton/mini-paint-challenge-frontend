import CurrentReference from "../../assets/images/current-reference-photo.png";
import ButtonCTA from "../ButtonCTA/ButtonCTA";
import "./CurrentPhoto.scss";

export default function CurrentPhoto() {
    return (
        <section className="current-photo">
            <div className="current-photo__divider"></div>
            <div className="current-photo__card">
                <h2 className="current-photo__header">{"This Week's Reference"}</h2>
                <img className="current-photo__img" src={CurrentReference} alt="reference photo for the week"></img>
                <p className="current-photo__details">
                    {"My goal for the photos is to capture simple subjects. This way we can get to a finished painting faster."}
                    <br /><br />
                    {"By focusing on simple subjects, you'll gradually develop the ability to construct more complex compositions."}
                    <br /><br />
                    {"Additionally, you can simplify even further by removing backgrounds or shapes that you're not ready to paint."}
                    <br /><br />
                    {"Receive a FREE high-quality reference photo in your inbox when you join the challenge."}
                </p>
                <div className="current-photo__cta-container">
                    <ButtonCTA className="current-photo__cta" content="Send Me This Photo" />
                </div>
            </div>
        </section>
    )
}