import { useForm, type SubmitHandler,  } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {registerSechma} from '../../validations/registerVaild'
import Inputs from "../Inputs";
import useAuth from "../../zustand/authSlice";
import Spiner from "../re-usable Com/Spiner";
import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { Bounce,  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export type TinputsForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export default function SignUpForm() {
  const navigate = useNavigate ()
  const handleRegister =useAuth((s) => s.handleRegister)
  const isPendingRegister =useAuth((s) => s.isPendingRegister)
  const [err ,setErr] = useState<string>('')
  const { register, handleSubmit ,formState: { errors } } = useForm<TinputsForm>({
      resolver: zodResolver(registerSechma),
});
  
  const onSubmit: SubmitHandler<TinputsForm> = async(data) => {
   const res = await handleRegister(data);
   if(!res.success){
    const errmsg = res.message as string
      setErr(errmsg)
   }else{
    setErr('')
    toast.success('Please , Login', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        transition: Bounce,
});
      navigate('/log-in')
   }
    
  };
  return (
    <form  onSubmit={ handleSubmit(onSubmit)} className="w-250 border-2 border-(--main-color)   bg-gray-100 h-120 mb-5 mx-auto rounded-3xl gap-6 p-15 flex flex-col items-center justify-center">
        <p className="text-3xl font-black text-amber-600">" Enter Your Data "</p>
          <div className="w-full rounded-3xl justify-center flex items-center gap-5  ">
            <Inputs register={register} label="First Name" name="firstName" type="text" error= {errors.firstName ? true : false} helperText={errors.firstName?.message} />
            <Inputs register={register} label="Last Name" name="lastName" type="text" error={errors.lastName ? true : false} helperText={errors.lastName?.message} />
          </div>
          <div className="w-full rounded-3xl justify-center flex items-center gap-5  ">
            <Inputs register={register} label="Email" name="email" type="email" error= {errors.email ? true : false}  helperText={errors.email?.message}/>
            <Inputs register={register} label="Phone Number" name="phone" type="number" error= {errors.phone ? true : false} helperText={errors.phone?.message} />
          </div>
          <div className="w-full rounded-3xl justify-center flex items-center gap-5  ">
            <Inputs register={register} label="Password" name="password" type="password" error={errors.password ? true : false} helperText={errors.password?.message} />
            <Inputs register={register} label="Confirm Password" name="confirmPassword" type="password" error={errors.confirmPassword ? true : false} helperText={errors.confirmPassword?.message} />
          </div>

          <div>
            {err && <div className="bg-red-200 mb-3 w-75 text-red-700 border rounded p-3 text-center font-black flex items-center gap-3 justify-center">{err} <BiSolidErrorAlt className="text-3xl text-red-900 font-black"/></div>

            }
            <div className="flex justify-center items-center">
            <button 
            disabled={ isPendingRegister}
            className="btn disabled:bg-amber-700 disabled:cursor-not-allowed" 
            >{isPendingRegister ? <Spiner /> : 'Sign Up'}</button>

            </div>
          </div>
          
        </form>
  )
}
