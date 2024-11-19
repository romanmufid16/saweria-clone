import { useEffect } from "react"
import Footer from "./components/Footer"
import Link from "./components/Link"
import RunningText from "./components/RunningText"

const Home = () => {
  useEffect(() => {
    document.title = "Connecting Communities, Empowering Streamers | Saweria"
  }, [])
  return (
    <div className="min-h-screen font-ibm antialiased">
      {/* Head */}
      <RunningText />
      <div className="flex flex-col justify-center items-center p-4 max-w-2xl mx-auto">
        <div className="w-64 sm:w-80 overflow-hidden relative">
          <img
            src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
            alt="Saweria"
            className="object-center"
          />
        </div>
        <div className="font-comfortaa text-center mb-5">
          <p className="text-5xl text-[#333333] font-thin mb-10">saweria.co</p>
          <p className="text-2xl sm:text-3xl font-semibold">Connecting Communities, Empowering Streamers</p>
        </div>
        <div className="space-x-5 mb-10">
          {/* <Link text="Login" href="#" bgColor="#faae2b" /> */}
          <Link text="Login" href="/login" bgColor="#8BD3DD" />
          <Link text="Register" href="/register" bgColor="#faae2b" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 max-w-2xl mx-auto">

        <div className="border border-black bg-[#f2f7f5] p-4 rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 w-full">
          <p className="text-sm mb-5">Saweria helps you to receive financial support from your fans with these payment methods:</p>
          <div className="px-10 grid grid-cols-3 mb-5">
            <div>
              <p><span className="text-xs">ID</span> Indonesia</p>
              <ul className="list-disc uppercase text-lg">
                <li>gopay</li>
                <li>ovo</li>
                <li>dana</li>
                <li>linkaja</li>
                <li>qris</li>
              </ul>
            </div>
            <div>
              <p><span className="text-xs">PH</span> Philipines</p>
              <ul className="list-disc uppercase text-lg">
                <li>gopay</li>
                <li>ovo</li>
                <li>dana</li>
                <li>linkaja</li>
                <li>qris</li>
              </ul>
            </div>
            <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_money.a24d8223.svg&w=750&q=75" alt="chicken" className="size-3/4" />
          </div>
          <p className="text-sm mb-2">You can easily cashout to all banks and e-wallet in Indonesia / Philipines</p>
        </div>
        <div className="flex flex-col items-end justify-center w-full mb-2">
          <div className="font-semibold rounded-t-lg border border-b-0 border-black p-2 bg-[#ffbdc4] font-comfortaa [box-shadow:10px_16px_0_#222222]">starting out</div>
          <div className="w-full border border-black bg-[#f2f7f5] rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 p-8 rounded-tr-none">
            <ul className="list-decimal px-8">
              <li>Register your account</li>
              <li>Verify your account</li>
              <li>Choose and set your overlay</li>
              <li>Don&apos;t forget to put the QR and your Saweria link</li>
              <li>Say thank you to your tipper</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mb-10">
          <div className="relative overflow-hidden w-64 mb-2 translate-x-10">
            <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapy_happy.603c7293.svg&w=384&q=75" alt="sawer" className="object-center" />
          </div>
          <p className="font-comfortaa text-2xl mb-2">ready to join saweria?</p>
          <Link text="Register" href="#" bgColor="#faae2b" />
        </div>

        <div className="flex flex-col items-end justify-center w-full mb-2">
          <div className="font-semibold rounded-t-lg border border-b-0 border-black p-2 bg-[#8BD3DD] font-comfortaa [box-shadow:10px_16px_0_#222222]">pricing</div>
          <div className="w-full border border-black bg-[#f2f7f5] rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 p-10 rounded-tr-none flex items-center gap-3">
            <div className="w-2/3">
              <p className="mb-2">Every transaction will be charged with a 10% platform fee (5-6% for Indonesia) with a minimum of 1.5 PHP (Rp150 for Indonesia)</p>
              <p>Cashout to your bank/e-wallet will be charged with transfer fee of IDR 5.000 / PHP 50</p>
            </div>
            <div className="w-1/3">
              <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraccoon_happy.e82cc2b2.svg&w=384&q=75" alt="racoon" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-center w-full mb-2">
          <a href="#" className="w-full border border-black bg-[#ffbdc4] rounded-lg [box-shadow:10px_10px_0_#222222] hover:[box-shadow:5px_5px_0_#222222] hover:translate-y-1 transition-all mb-10 p-10 flex items-center justify-center gap-5">
            <div className="w-1/4">
              <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_sad.23bb618d.svg&w=256&q=75" alt="chicken" className="object-cover" />
            </div>
            <div className="w-full text-center font-comfortaa text-2xl sm:text-4xl space-y-3">
              <p>confused?</p>
              <p>have questions?</p>
              <p>please check our faq</p>
            </div>
          </a>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
          <Link text="Tutorial" href="/tutorial" bgColor="#faae2b" className="w-full text-center" />
          <Link text="Terms and conditions" href="/terms" bgColor="#8BD3DD" className="w-full text-center" />
        </div>

        <Footer />

      </div>
    </div >
  )
}

export default Home