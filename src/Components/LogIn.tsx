import { useEffect } from "react";
import LogInForm from "./auth/LogInForm";
import Headung from "./re-usable Com/Headung";

export default function LogIn() {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <div>
    <div className="bg-(--color-sec) w-max mx-auto p-3 rounded text-white mt-5 mb-5">
      <Headung title="Log-In"></Headung> 
      
    </div>
    <div>

    <LogInForm />
    </div>
    </div>
    

   
   
  )
}
