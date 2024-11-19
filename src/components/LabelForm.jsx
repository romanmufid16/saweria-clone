import PropTypes from "prop-types";

const LabelForm = ({ htmlFor, text, required }) => {
  return (
    <>
      <label
        htmlFor={`${htmlFor}`}
        className="mb-3">{`${text}`}:
        <span
          className="text-red-500">
          {required ? '*' : ''}
        </span>
      </label>
    </>
  )
}

LabelForm.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  required: PropTypes.bool
}

export default LabelForm