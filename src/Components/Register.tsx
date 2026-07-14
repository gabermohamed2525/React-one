import SignUpForm from "./auth/signUpForm";
import Headung from "./re-usable Com/Headung";

export default function Register() {
  return (
   <>
   <div className="bg-(--color-sec) w-max mx-auto p-3 rounded text-white mt-5 mb-5">
         <Headung title="Register"></Headung>
         
       </div>
        <SignUpForm />
   </>
  )
}
