import { Pagination } from "@mui/material";
import type { TprodcutData } from "../../zustand/prodcutSlice";
import ProCart from "../ProCart";
import useProdcut from "../../zustand/prodcutSlice";
import SkeltonProdcuts from "../../skeltons/SkeltonProdcuts";
import { Link } from "react-router-dom";
// import { IoHeadsetOutline } from "react-icons/io5";
// import { TfiMouseAlt } from "react-icons/tfi";
// import { FaRegKeyboard } from "react-icons/fa6";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { TbDeviceIpad } from "react-icons/tb";
import { useEffect } from "react";
import useAuth from "../../zustand/authSlice";




type TprodcutsProps={
    prodcutsData : TprodcutData[],
    isPending: boolean,
     page ?:number,
     totalPages ?: number
     wish ?: string
}

export default function BigProdcuts( {prodcutsData ,isPending , page , totalPages , wish} :TprodcutsProps) {
    const handleChangePage =useProdcut( s => s.handleChangePage)
    const isPendingCurrentUser =useAuth( s => s.isPendingCurrentUser)
      const fetchCategories =useProdcut(s=>s.fetchCategories)
      const categories =useProdcut(s=>s.categories)    
  useEffect(()=>{
    fetchCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      {wish ==='on' ? (
        ''
      ) : (

      <div className="flex items-center gap-3 mt-10 justify-center border-2 border-amber-50/30 p-9 rounded-2xl">
        <p className="block text-2xl ">Categories:</p>
        <div className="flex items-center gap-3 ">
          {!categories.length ? <div> Loading Categories . . . </div> :
          categories.map((category)=>(
            <div className="btn-in-o">
              <Link to={`/prodcuts/${category}`} className="flex items-center gap-2">{category}  </Link>

            </div>
          ))
          }
        </div>
        {/* <div className="btn-in-o ">
          <Link to={''} className="flex items-center gap-2">Mouse </Link>
        </div>
        <div className="btn-in-o ">
          <Link to={''} className="flex items-center gap-2">Keyboard </Link>
        </div>
        <div className="btn-in-o ">
          <Link to={''} className="flex items-center gap-2">Controller </Link>
        </div>
        <div className="btn-in-o ">
          <Link to={''} className="flex items-center gap-2">Mouse Pad </Link>
        </div> */}
      </div>
      )
      }
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {
        isPending || isPendingCurrentUser ? <SkeltonProdcuts /> :
        prodcutsData.map((el)=> <ProCart {...el} key={el.id}/>)
      }
    </div>
    
    {totalPages>1 &&(

    <div className='mt-4 flex items-center justify-center  bg-white/80   p-3 rounded-2xl text-white'>
        <Pagination onChange={(_, val)=> handleChangePage(val)} count={totalPages} page={page}  />

    </div>
    )}

    </div>
  )
}
