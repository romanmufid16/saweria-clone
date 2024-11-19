import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const Video = ({ url }) => {
  return (
    <>
      <ReactPlayer url={url} className="react-player" />
    </>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Video