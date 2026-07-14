import { Link, useNavigate } from "react-router-dom";
import Inputs from "../Inputs";
import { useForm, type SubmitHandler,  } from "react-hook-form";
import useAuth from "../../zustand/authSlice";
import Spiner from "../re-usable Com/Spiner";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

export type TLoginForm = {
  email: string;
  password: string;
};
export default function LogInForm() {
  const navigate = useNavigate ()
  const handleLogin = useAuth( s=>s.handleLogin)
  const ispendingLoin = useAuth( s=>s.isPendingLogin)
   const [err ,setErr] = useState<string>('')
    const { register, handleSubmit } = useForm<TLoginForm>();

  const onSubmit: SubmitHandler<TLoginForm> = async(data) => {
   const res = await handleLogin(data);
   if(!res.success){
       const errmsg = res.message as string
         setErr(errmsg === "missing email or phone " ? "missing email or password" : errmsg === "Invalid login credentials" ? "(email or password) wrong!!" : errmsg);
      }else{
       setErr('')
       toast.success('Success Login', {
           position: "top-right",
           autoClose: 3000,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: false,
           theme: "light",
           transition: Bounce,
   });
         navigate('/')
      }
  };
  return (
    <form onSubmit={ handleSubmit(onSubmit)} className="w-250 border-2 border-(--main-color) bg-gray-100  h-130 mb-5 mx-auto rounded-3xl gap-4 p-5 flex flex-col items-center justify-center">
        <p className="text-3xl font-black text-amber-600">" Login Now "</p>
      <div className="w-full rounded-3xl justify-center flex items-center flex-col gap-5  ">
        <Inputs  register={register}  label="Email" name="email" type="email" error= {false} />
        <Inputs register={register}  label="Password" name="password" type="password" error={false} />
      </div>
      {err && <div className="bg-red-200 mb-3 w-75 text-red-700 border rounded p-3 text-center font-black flex items-center gap-3 justify-center">{err} <BiSolidErrorAlt className="text-3xl text-red-900 font-black"/></div>
      
                  }
      <button 
          
          disabled={ ispendingLoin}
            className="btn disabled:bg-amber-700 disabled:cursor-not-allowed" 
            >{ispendingLoin ? <Spiner /> : 'Login'}</button>
      <div className="flex gap-3 items-center capitalize">
        <p className="text-sm">I don't have account</p>
        <Link to={'register'} className=" text-sm p-3 rounded duration-300 hover:bg-amber-500 scale-105 hover:text-white text-amber-500 underline">Register</Link>
        
      </div>
    </form>
  )
}
