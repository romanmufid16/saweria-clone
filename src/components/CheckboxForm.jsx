import PropTypes from 'prop-types';

const CheckboxForm = ({ checked, onChange, label, name,  required }) => {
  return (
    <label className="flex items-center space-x-2 mb-3">
      <input
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
        required={required}
        className="h-4 w-4 accent-blue-600 rounded focus:ring-blue-500 shrink-0 transition-all duration-500"
      />
      <span >{label}<span className="text-red-500">{required ? '*' : ''}</span></span>
    </label>
  )
}

CheckboxForm.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}

export default CheckboxForm