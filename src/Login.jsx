import Footer from "./components/Footer"
import RunningText from "./components/RunningText"

const Login = () => {
  return (
    <div className="min-h-screen font-ibm antialiased transition-all">
      <RunningText />
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center px-5 py-2">
        <div className="border border-black bg-[#f2f7f5] p-4 rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 w-full">

          {/* Image  */}
          <div className="flex flex-col justify-center items-center p-4">
            <div className="w-52 sm:w-80 overflow-hidden relative">
              <img
                src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
                alt="Saweria"
                className="object-center"
              />
            </div>
            <div className="font-comfortaa text-center mb-5">
              <p className="text-5xl text-[#333333] font-thin mb-10">saweria.co</p>
              <p className="text-2xl sm:text-3xl font-semibold">Login</p>
            </div>
          </div>
          
          {/* Form login */}
          <form action="" className="w-full mb-5">
            <label htmlFor="email" className="block mb-3">Email:<span className="text-red-500">*</span></label>
            <input type="email" name="email" placeholder="email@pribadi.com" className="w-full bg-transparent border-b border-black py-2 focus:border-blue-500 focus:border-b-2 focus:outline-none block mb-3"/>
            <label htmlFor="password" className="block mb-3">Password:<span className="text-red-500">*</span></label>
            <input type="password" name="password" className="w-full bg-transparent border-b border-black py-2 focus:border-blue-500 focus:border-b-2 focus:outline-none block"/>
          </form>

          {/* Utils */}
          <div className="flex justify-between items-center">
            <a href="" className="hover:underline">Forgot password</a>
            <button type="submit" className="px-4 py-2 border border-black rounded-lg [box-shadow:8px_5px_0_#222222] active:[box-shadow:5px_3px_0_#222222] active:translate-y-1 transition-transform text-xl w-1/2 bg-[#8BD3DD]">Login</button>
          </div>

        </div>

        <Footer />
      </div>

    </div>
  )
}

export default Login