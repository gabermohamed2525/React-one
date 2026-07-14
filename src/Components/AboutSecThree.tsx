import gp1 from '../../public/images/gp_icon01.png'
import gp2 from '../../public/images/gp_icon02.png'
import gp5 from '../../public/images/gp_icon05.png'
export default function AboutSecThree() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 mt-13 h-[50vh]'>
      <div className='flex items-center justify-center'>
        <p className='text-4xl text-center font-black leading-relaxed capitalize  ' style={{fontFamily:'var(--font-inter)'}}>We Are A Crative Gaming Agency, Building Websites <br /> that Gaming Traffic, Engagement & Conversion For <br /> Game Leanding Brands</p>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='mt-3 flex items-start gap-4 duration-700 hover:-translate-y-2 bg-(--scondary-color) p-6 rounded-2xl'>
           <img src={gp2} alt="" className='w-17' />
           <div className='flex flex-col items-start gap-2 '>
            <p className='capitalize text-2xl font-black duration-300 hover:text-(--main-color)'>Discover</p>
            <p className='hoo '>Nullam quis Macenas thats <br /> ullmcorper dui et placerat feugia.</p>
            </div> 
        </div>
        <div className='mt-3 flex items-start gap-4 duration-700 hover:-translate-y-2 bg-(--scondary-color) p-6 rounded-2xl'>
           <img src={gp1} alt="" className='w-17' />
           <div className='flex flex-col items-start gap-2 '>
            <p className='capitalize text-2xl font-black duration-300 hover:text-(--main-color)'>Live Streaming</p>
            <p className='hoo '>Nullam quis Macenas thats <br /> ullmcorper dui et placerat feugia.</p>
            </div> 
        </div>
        <div className='mt-3 flex items-start gap-4 duration-700 hover:-translate-y-2 bg-(--scondary-color) p-6 rounded-2xl'>
           <img src={gp5} alt="" className='w-17' />
           <div className='flex flex-col items-start gap-2 '>
            <p className='capitalize text-2xl font-black duration-300 hover:text-(--main-color)'>Gaming Updates</p>
            <p className='hoo '>Nullam quis Macenas thats <br /> ullmcorper dui et placerat feugia.</p>
            </div> 
        </div>
        
      </div>
    </div>
  )
}
