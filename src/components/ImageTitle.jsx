import PropTypes from "prop-types";

const ImageTitle = ({title}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <a href="/" className="w-52 sm:w-80 overflow-hidden relative">
        <img
          src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
          alt="Saweria"
          className="object-center"
        />
      </a>
      <div className="font-comfortaa text-center mb-5">
        <p className="text-5xl text-[#333333] font-thin mb-10">saweria.co</p>
        <p className="text-2xl sm:text-3xl font-semibold">{title}</p>
      </div>
    </div>
  )
}

ImageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default ImageTitle