import { Link, useParams } from "react-router-dom";
import Container from "../Components/re-usable Com/Container";
import Headung from "../Components/re-usable Com/Headung";
import useProdcut from "../zustand/prodcutSlice";
import { useEffect, useState } from "react";
import BigProdcuts from "../Components/re-usable Com/BigProdcuts";
export default function ProdcutsCategory() {
    const params = useParams()
    const category = params.category as string
     const fetchProdcuts = useProdcut (s => s.fetchProdcutsData)
     const prodcutsData = useProdcut (s => s.prodcutsData)
     const isPendingProdcutsData = useProdcut (s => s.isPendingProdcutsData)
     const page = useProdcut (s => s.page)
     const totalPages = useProdcut (s => s.totalPages)
     const [error ,setError] = useState('')
     useEffect(()=>{
      const handleFetchData = async()=>{

        const res = await fetchProdcuts(category)
        if(!res.success){
          const errMgs = res.message as string
          setError(errMgs)
        }else{
          setError('')
        }
      }
      handleFetchData()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[page , category] )
  return (
    <Container>

        <Headung title={category} category />
        <Link to={'/prodcuts'} className="btn-in-o"> Back Shop</Link>
           {!error?
              <BigProdcuts 
              prodcutsData={prodcutsData}
              isPending={isPendingProdcutsData}
              page={page}
              totalPages={totalPages}
              
              /> : <div className="text-center w-full bg-red-100 mt-6 text-red-700 font-black text-2xl p-5 rounded-2xl">{error}</div>
              }
    </Container>
  )
}
