import offer from '../../public/images/offer_shape.png'
import counter1 from '../../public/images/counter_icon01.png'
import counter2 from '../../public/images/counter_icon02.png'
import counter3 from '../../public/images/counter_icon03.png'
export default function AboutSecTwo() {
  return (
    <div className='flex flex-col items-start gap-15 p-6 bbg'>
      <div className="flex flex-col items-start gap-5 relative px-3 border-l-6 border-(--main-color)">
        <p className="text-5xl font-black  uppercase leading-tight z-10">EXPERIENCE just <br /> for gamers <span className="text-(--main-color)">OFFER</span></p> 
        <img src={offer} alt="" className='absolute top-0 left-0 z-6 w-20 ani' />
      </div>
      <div className="one flex items-center justify-between gap-5 ">
        <div className='flex flex-col items-start gap-1 duration-600 hover:-translate-y-3 bg-(--mini-dark) p-8 rounded-xl'>
            <b className='uppercase text-xl'>gamers offer</b>
            <p className='hoo text-lg'>Exploring the universe gaming sloth</p>
        </div>
        <div className='flex flex-col items-start gap-1 duration-600 hover:-translate-y-3 bg-(--mini-dark) p-8 rounded-xl'>
            <b className='uppercase text-xl'>YOU’LL BE WATCHING</b>
            <p className='hoo text-lg'>Exploring the universe gaming sloth</p>
        </div>
        <div className='flex flex-col items-start gap-1 duration-600 hover:-translate-y-3 bg-(--mini-dark) p-8 rounded-xl'>
            <b className='uppercase text-xl'>FINISHED MATCHES</b>
            <p className='hoo text-lg'>Exploring the universe gaming sloth</p>
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>

      <div className="two flex items-center gap-6">
        <img src={counter1} alt="" />
        <div className='flex flex-col items-start gap-2'>
        <p className='text-7xl font-black text-transparent uppercase' style={{ WebkitTextStroke: "2px var(--main-color)",}}>39k+</p>
        <p className='uppercase hoo'>active fan flowers</p>
        </div>
      </div>
      <div className="two flex items-center gap-6">
        <img src={counter2} alt="" />
        <div className='flex flex-col items-start gap-2'>
        <p className='text-7xl font-black text-transparent uppercase' style={{ WebkitTextStroke: "2px var(--main-color)",}}>280k+</p>
        <p className='uppercase hoo'>Will sharpen your</p>
        </div>
      </div>
      <div className="two flex items-center gap-6">
        <img src={counter3} alt="" />
        <div className='flex flex-col items-start gap-2'>
        <p className='text-7xl font-black text-transparent uppercase' style={{ WebkitTextStroke: "2px var(--main-color)",}}>40k+</p>
        <p className='uppercase hoo'>your earnings</p>
        </div>
      </div>
      </div>
    </div>
  )
}
