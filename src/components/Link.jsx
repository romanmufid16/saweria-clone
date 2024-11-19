/* eslint-disable react/prop-types */
const Link = ({ text, href, bgColor = '', className = '', target = '_self' }) => {
  return (
    <a
      href={href}
      target={target}
      className={`px-4 py-2 border border-black rounded-lg [box-shadow:8px_5px_0_#222222] active:[box-shadow:5px_2px_0_#222222]  transition-all text-xl ${className}`}
      style={{ backgroundColor: bgColor }} 
    >
      {text}
    </a>
  )
}

export default Link