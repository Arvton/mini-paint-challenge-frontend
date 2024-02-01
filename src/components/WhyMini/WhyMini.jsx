import ButtonCTA from "../ButtonCTA/ButtonCTA";
import PropTypes from 'prop-types';
import "./WhyMini.scss";

export default function WhyMini({ onClick }) {
    return (
        <section className="why-mini">
            <div className="why-mini__divider"></div>
            <div className="why-mini__card">
                <h2 className="why-mini__header">Why Paint Mini?</h2>
                <p className="why-mini__details">
                    {"A large canvas can be intimidating when you're learning to paint. There's so much space to fill. It's easy to get lost in the details."}
                    <br /><br />
                    {"Big paintings can take many sessions to finish. Sometimes, you might not finish them.  This could be discouraging to new painters."}
                    <br /><br />
                    {"That's why we're painting mini."}
                    <br /><br />
                    {"In under three hours, you can finish a mini-painting. You will have a small piece of art that you can display."}
                    <br /><br />
                    {"Each small painting is a chance to focus on one technique. You can learn to paint without feeling overwhelmed."}
                    <br /><br />
                    {"These small paintings might not seem like much. But it's a beautiful reflection of how small things every day help you grow."}
                    <br /><br />
                    {"Together, let's take strides towards personal growth."}
                </p>
                <div className="why-mini__cta-container">
                    <ButtonCTA className="why-mini__cta" content="Try a Mini Painting" onClick={onClick} />
                </div>
            </div>
        </section>
    )
}

WhyMini.propTypes = {
    onClick: PropTypes.func.isRequired,
}