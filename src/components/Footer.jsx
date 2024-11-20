import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center text-sm sm:text-xl mb-5 text-slate-900">
      <div className="space-y-5 w-1/2">
        <p>Made with 💙 from SUB</p>
        <p>PT Harta Tahta Sukaria</p>
      </div>

      <div className="flex flex-col justify-end items-end gap-2 w-1/2">
        <a href="#" className="underline hover:no-underline">Terms and Conditions</a>
        <a href="#" className="underline hover:no-underline">FAQ</a>
        <a href="#" className="underline hover:no-underline">Changelog</a>
        <ul className="flex items-center gap-4">
          <li>
            <a href=""><MdOutlineEmail className="size-7" /></a>
          </li>
          <li>
            <a href=""><FaInstagram className="size-7" /></a>
          </li>
          <li>
            <a href=""><FaTwitter className="size-7" /></a>
          </li>
          <li>
            <a href=""><FaDiscord className="size-7" /></a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer