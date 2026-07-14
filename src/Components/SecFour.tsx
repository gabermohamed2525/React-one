import team1 from '../../public/images/team_member01.png'
import team2 from '../../public/images/team_member02.png'
import team3 from '../../public/images/team_member03.png'
import team4 from '../../public/images/team_member04.png'
import team5 from '../../public/images/team_member05.png'
import team6 from '../../public/images/team_member06.png'
import team7 from '../../public/images/team_member07.png'
import team8 from '../../public/images/team_member08.png'
import team9 from '../../public/images/team_member09.png'
import team10 from '../../public/images/team_member10.png'
import team11 from '../../public/images/team_member11.png'
import team12 from '../../public/images/team_member12.png'
import team13 from '../../public/images/team_member13.png'
import team14 from '../../public/images/team_member14.png'
import Headung from './re-usable Com/Headung'
import section from '../../public/images/section_line.png'

export default function SecFour() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 lg:gap-10 px-4'>

      <Headung title='Active Team Members'/>

      <img src={section} className='-translate-y-4 lg:-translate-y-6 w-48 sm:w-auto' alt="" />

      <div className='flex  justify-center items-center gap-3'>
        <img src={team1} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team2} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team3} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team4} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team5} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team6} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team7} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team8} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
      </div>

      <div className='flex flex-wrap justify-center items-center gap-3'>
        <img src={team9} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team10} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team11} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team12} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team13} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
        <img src={team14} className='w-18 sm:w-20 lg:w-auto border-2 cursor-pointer border-black rounded-[50%] duration-300 hover:border-amber-600' alt="" />
      </div>

      <button className='btn'>view all Members</button>

    </div>
  )
}