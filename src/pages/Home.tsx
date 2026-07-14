import { useEffect } from "react";
import Hero from "../Components/Hero";
import Container from "../Components/re-usable Com/Container";
import SecFive from "../Components/SecFive";
import SecFour from "../Components/SecFour";
import SecOne from "../Components/SecOne";
import SecSeven from "../Components/SecSeven";
import SecSix from "../Components/SecSix";
import SecThree from "../Components/SecThree";
import SecTwo from "../Components/SecTwo";
import {useSearchParams} from 'react-router-dom'
import { toast } from "react-toastify";
export default function Home() {
  const [searchParams]= useSearchParams()
  useEffect(()=>{
   const msg = searchParams.get('status')
   if(msg === 'noAuth'){
    toast.info('U Must Loign Frist ...')
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="home">
      <Hero />
      <Container>
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />

      </Container>
      <SecFive />
      <Container>
        <SecSix />
        <SecSeven />
      </Container>
      
    </div>
  )
}
