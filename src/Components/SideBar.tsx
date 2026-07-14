import logo from '../../public/images/logo.png'
import insta1 from '../../public/images/sd_insta01.jpg'
import insta2 from '../../public/images/sd_insta02.jpg'
import insta3 from '../../public/images/sd_insta03.jpg'
import insta4 from '../../public/images/sd_insta04.jpg'
import insta5 from '../../public/images/sd_insta05.jpg'
import insta6 from '../../public/images/sd_insta06.jpg'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";



export default function SideBar( ) {
  
  return (
    <div className='relative'>
    <div className={`absolute -top-3 flex flex-col items-start  z-1000 justify-center gap-5 p-3 right-400 w-80 h-[90vh] bg-(--scondary-color)`}>
      <div className=' p-5 border-b-2 border-amber-600  w-full flex items-center justify-between'>
        <img src={logo} className='w-30' alt="" />
        <IoIosCloseCircle className='text-white duration-300 hover:text-red-800 text-2xl cursor-pointer'  />
      </div>
      <div className='flex items-start flex-col gap-1 text-white p-5'>
        <p className='text-xl uppercase font-black'>Office Address</p>
        <p className='hoo'>123/A, Miranda City Likaoli</p>
        <p className='hoo'>Prikano, Dope</p>
      </div>
      <div className='flex items-start flex-col gap-1 text-white p-5'>
        <p className='text-xl uppercase font-black'>Phone Number</p>
        <p className='hoo'>+0989 7876 9865 9</p>
        <p className='hoo'>+(090) 8765 86543 85</p>
      </div>
      <div className='flex items-start flex-col gap-1 text-white p-5'>
        <p className='text-xl uppercase font-black'>Email Address</p>
        <p className='hoo'>info@example.com</p>
        <p className='hoo'>example.mail@hum.com</p>
      </div>
      <div className='w-full'>
      <div className='flex items-center justify-center gap-2 w-full'>
        <img src={insta1} className='w-20 cursor-pointer'  alt="" />
        <img src={insta2} className='w-20 cursor-pointer'  alt="" />
        <img src={insta3} className='w-20 cursor-pointer'  alt="" />
      </div>
      <div className='flex items-center justify-center gap-2 w-full mt-3'>
        <img src={insta4} className='w-20 cursor-pointer'  alt="" />
        <img src={insta5} className='w-20 cursor-pointer'  alt="" />
        <img src={insta6} className='w-20 cursor-pointer'  alt="" />
      </div>

      </div>
        <div className='flex items-center justify-center gap-3 w-full mt-5'>
            <RiFacebookFill className='text-xl duration-300 hover:text-(--main-color) cursor-pointer text-amber-50'/>
            <FaTwitter className='text-xl duration-300 hover:text-(--main-color) cursor-pointer text-amber-50'/>
            <FaYoutube className='text-xl duration-300 hover:text-(--main-color) cursor-pointer text-amber-50'/>
            <FaGoogle className='text-xl duration-300 hover:text-(--main-color) cursor-pointer text-amber-50'/>

        </div>
    </div>
    
    </div>
  )
  
}
