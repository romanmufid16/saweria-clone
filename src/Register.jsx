import { useEffect, useState } from "react"
import Card from "./components/Card"
import ImageTitle from "./components/ImageTitle"
import InputForm from "./components/InputForm"
import LabelForm from "./components/LabelForm"
import RunningText from "./components/RunningText"
import CheckboxForm from "./components/CheckboxForm"
import Button from "./components/Button"
import Footer from "./components/Footer"

const Register = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  useEffect(() => {
    document.title = "Register | Saweria"
  })
  return (
    <div className="min-h-screen font-ibm antialiased">
      <RunningText />
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center px-5 py-2">
        <Card>
          <ImageTitle title="Register" />
          <form action="" className="w-full mb-5">

            <LabelForm htmlFor="email" text="Email" required={true} />
            <InputForm placeholder="email@pribadi.com" required={true} type="email" name="email" />

            <LabelForm htmlFor="currency" text="Country & Currency" />
            <select name="currency" id="" className="w-full bg-transparent border-b border-black py-2 focus:border-blue-500 focus:border-b-2 focus:outline-none block mb-3">
              <option value="ID">ID Rupiah</option>
              <option value="PH">PH Peso</option>
            </select>


            <CheckboxForm
              name="terms"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
              label="Must be 17 years of age or older."
              required={true}
            />
            <CheckboxForm
              name="terms"
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
              label="Do not use saweria for buying/selling or commercial purposes"
              required={true}
            />
            <CheckboxForm
              name="terms"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
              label="Do not distribute prohibited content (pornography, gambling, etc.)"
              required={true}
            />
            <CheckboxForm
              name="terms"
              checked={checked4}
              onChange={() => setChecked4(!checked4)}
              label={
                <>
                  Agreeing to the <a href="/terms" className="underline hover:no-underline">terms and conditions</a>
                </>
              }
              required={true}
            />

            <p className="text-sm sm:text-base mb-3">
              Violating the terms and conditions may result in your account being unilaterally deactivated (banned) by saweria.
            </p>

            <Button text="Register" className="w-full" bgColor="[#8BD3DD]"/>

          </form>

        </Card>
        
        <Footer />

      </div>

    </div>
  )
}

export default Register