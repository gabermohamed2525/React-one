import { Link } from 'react-router-dom'
import sction from '../../public/images/section_line.png'
import clan1 from '../../public/images/my_match_clan01.png'
import clan2 from '../../public/images/my_match_clan02.png'
import clan3 from '../../public/images/my_match_clan03.png'
import clan4 from '../../public/images/my_match_clan04.png'
import clan5 from '../../public/images/my_match_clan05.png'
import matches from '../../public/images/match_vs02.png'
import watch from '../../public/images/watch_icon.png'
export default function TourSecThree() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-3">
      <div className="flex flex-col gap-3">
        <p className="text-5xl uppercase font-black">see <span className="text-(--main-color)">my</span> MATCHES</p>
      </div>
        <img src={sction} alt="" />

        <main>
            <div className="links flex items-center gap-4 uppercase font-black justify-center mt-10">
                <div className='bg-(--main-color) p-4 rounded-4xl'>
                <Link to={''}>all matches up</Link>
            </div>
            <div className='duration-300 hover:text-(--main-color)'>
                <Link to={''}>gaming matches</Link>
            </div>
            <div className='duration-300 hover:text-(--main-color)'>
                <Link to={''}>latest results</Link>
            </div>
            </div>
            <div className='flex flex-col items-center'>

            <div className="group flex items-center justify-between w-290 h-100">
                <div className="yt flex items-center justify-between w-full">
                    <div className='flex items-center gap-5 translate-x-25'>
                        <img src={clan1} alt="" />
                        <img src={matches} alt="" />
                        <img src={clan3} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 font-black translate-x-0 uppercase'>
                        <p>live matches</p>
                        <p className='text-2xl'>Call Of Duty Mascot</p>
                        <p className='text-(--main-color)'>10th Mar 2022.</p>
                    </div>
                    <div className='flex items-center gap-3 -translate-x-15 uppercase hoo'>
                        <img src={watch} alt="" />
                        <p>watch stream</p>
                    </div>
                </div>
            </div>

            <div className="group flex items-center justify-between w-290 h-100 -translate-y-38">
                <div className="yt flex items-center justify-between w-full">
                    <div className='flex items-center gap-5 translate-x-25'>
                        <img src={clan3} alt="" />
                        <img src={matches} alt="" />
                        <img src={clan4} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 font-black translate-x-0 uppercase'>
                        <p>live matches</p>
                        <p className='text-2xl'>Call Of Duty Mascot</p>
                        <p className='text-(--main-color)'>10th Mar 2022.</p>
                    </div>
                    <div className='flex items-center gap-3 -translate-x-15 uppercase hoo'>
                        <img src={watch} alt="" />
                        <p>watch stream</p>
                    </div>
                </div>
            </div>
            <div className="group flex items-center justify-between w-290 h-100 -translate-y-77">
                <div className="yt flex items-center justify-between w-full">
                    <div className='flex items-center gap-5 translate-x-25'>
                        <img src={clan1} alt="" />
                        <img src={matches} alt="" />
                        <img src={clan2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 font-black translate-x-0 uppercase'>
                        <p>live matches</p>
                        <p className='text-2xl'>Call Of Duty Mascot</p>
                        <p className='text-(--main-color)'>10th Mar 2022.</p>
                    </div>
                    <div className='flex items-center gap-3 -translate-x-15 uppercase hoo'>
                        <img src={watch} alt="" />
                        <p>watch stream</p>
                    </div>
                </div>
            </div>
            <div className="group flex items-center justify-between w-290 h-100 -mt-115">
                <div className="yt flex items-center justify-between w-full">
                    <div className='flex items-center gap-5 translate-x-25'>
                        <img src={clan5} alt="" />
                        <img src={matches} alt="" />
                        <img src={clan2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 font-black translate-x-0 uppercase'>
                        <p>live matches</p>
                        <p className='text-2xl'>Call Of Duty Mascot</p>
                        <p className='text-(--main-color)'>10th Mar 2022.</p>
                    </div>
                    <div className='flex items-center gap-3 -translate-x-15 uppercase hoo'>
                        <img src={watch} alt="" />
                        <p>watch stream</p>
                    </div>
                </div>
            </div>

            </div>
        </main>
    </div>
  )
}
