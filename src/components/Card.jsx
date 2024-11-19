import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="border border-black bg-[#f2f7f5] p-4 rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 w-full">
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card