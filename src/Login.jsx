import { useEffect } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Footer from "./components/Footer"
import ImageTitle from "./components/ImageTitle"
import InputForm from "./components/InputForm"
import LabelForm from "./components/LabelForm"
import RunningText from "./components/RunningText"

const Login = () => {
  useEffect(() => {
    document.title = "Login | Saweria"
  }, []);
  return (
    <div className="min-h-screen font-ibm antialiased">
      <RunningText />
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center px-5 py-2">
        <Card>
          {/* Image  */}
          <ImageTitle title="Login" />

          {/* Form login */}
          <form action="" className="w-full mb-5">
            <LabelForm htmlFor="email" text="Email" required={true} />
            <InputForm placeholder="email@pribadi.com" required={true} type="email" name="email" />

            <LabelForm htmlFor="password" text="Password" required={true} />
            <InputForm htmlFor="password" labelText="Password" required={true} type="password" name="password" />
          </form>

          {/* Utils */}
          <div className="flex justify-between items-center">
            <a href="" className="hover:underline">Forgot password</a>
            <Button text="Login" bgColor="[#8BD3DD]" className="w-1/2" />
          </div>
        </Card>

        <Footer />
      </div>

    </div>
  )
}

export default Login