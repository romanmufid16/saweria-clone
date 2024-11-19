import PropTypes from 'prop-types';

const Button = ({ text, bgColor = '', className = '' }) => {
  return (
    <button
      type="submit"
      className={`px-4 py-2 border border-black rounded-lg [box-shadow:8px_5px_0_#222222] active:[box-shadow:5px_3px_0_#222222] active:translate-y-1 transition-transform text-xl bg-${bgColor} ${className}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Button