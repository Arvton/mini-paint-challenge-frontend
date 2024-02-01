import PropTypes from 'prop-types';

export default function ButtonCTA({ className, content }) {
    return (
        <button className={className}>{content}</button>
    )
}

ButtonCTA.propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};