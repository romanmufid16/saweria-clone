import Card from "./components/Card"
import Footer from "./components/Footer"
import Video from "./components/Video"

const Tutorial = () => {
  document.title = "Tutorial | Saweria"
  return (
    <div className="min-h-screen font-comfortaa antialiased">
      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center px-5 py-2">
        <div className="flex flex-col justify-center items-center p-4 w-full">
          <a href="/" className="w-full overflow-hidden relative">
            <img
              src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
              alt="Saweria"
              className="object-center"
            />
          </a>
          <div className="font-comfortaa text-center mb-5">
            <p className="text-5xl text-[#333333] font-thin mb-10">saweria.co</p>
          </div>
        </div>
        <Card>
          <p className="text-center text-xl sm:text-3xl mb-3">Cara menggunakan saweria overlay</p>
          <div className="flex justify-center mb-3">
            <Video url="https://youtu.be/RRKPkwBkz_0" />
          </div>
        </Card>
        <Footer />
      </div>
    </div>
  )
}

export default Tutorial