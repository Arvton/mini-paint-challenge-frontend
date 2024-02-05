import PropTypes from 'prop-types';

export default function ButtonCTA({ className, onClick, content }) {
    return (
        <button className={className} onClick={onClick}>{content}</button>
    )
}

ButtonCTA.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
};