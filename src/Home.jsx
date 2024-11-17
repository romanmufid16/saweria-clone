import Link from "./components/Link"

const Home = () => {
  return (
    <div className="min-h-screen font-ibm antialiased">
      {/* Head */}
      <div className="overflow-hidden bg-[#faae2b] mb-2">
        <div className="whitespace-nowrap animate-marquee">
          <a className="inline-block hover:underline">
            Media share now supports TikTok and IG Reels! Check your Overlay settings.
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="w-64 overflow-hidden relative">
          <img
            src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
            alt="Saweria"
            className="object-center"
          />
        </div>
        <div className="font-comfortaa text-center mb-5">
          <p className="text-5xl text-[#333333] font-thin mb-10">saweria.co</p>
          <p className="text-2xl font-semibold">Connecting Communities, Empowering Streamers</p>
        </div>
        <div className="space-x-5 mb-10">
          <Link text="Login" href="#" bgColor="#ffbdc4" />
          <Link text="Register" href="#" bgColor="#faae2b" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="border border-black bg-[#f2f7f5] p-4 rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 max-w-xl">
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
        <div className="flex flex-col items-end justify-center max-w-xl mb-2">
          <div className="rounded-t-lg border border-b-0 border-black p-2 bg-[#ffbdc4] font-comfortaa [box-shadow:10px_16px_0_#222222]">starting out</div>
          <div className="w-full border border-black bg-[#f2f7f5] rounded-lg [box-shadow:10px_10px_0_#222222] mb-10 p-8">
            <ul className="list-decimal px-8">
              <li>Register your account</li>
              <li>Verify your account</li>
              <li>Choose and set your overlay</li>
              <li>Don&apos;t forget to put the QR and your Saweria link</li>
              <li>Say thank you to your tipper</li>
            </ul>
          </div>
        </div>
        <div className="max-w-xl flex flex-col justify-center items-center">
          <div className="relative overflow-hidden w-64 mb-2 translate-x-10">
            <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapy_happy.603c7293.svg&w=384&q=75" alt="sawer" className="object-center" />
          </div>
          <p className="font-comfortaa text-2xl mb-2">ready to join saweria?</p>
          <Link text="Register" href="#" bgColor="#faae2b" />
        </div>
      </div>
    </div >
  )
}

export default Home