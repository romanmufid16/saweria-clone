import PropTypes from "prop-types";

const InputForm = ({ type, placeholder, required, name }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-black py-2 focus:border-blue-500 focus:border-b-2 focus:outline-none block mb-3" required={required}
      />
    </>
  )
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default InputForm