import { useEffect, useState } from "react";
import BigProdcuts from "../Components/re-usable Com/BigProdcuts";
import Container from "../Components/re-usable Com/Container";
import Headung from "../Components/re-usable Com/Headung";
import useProdcut from "../zustand/prodcutSlice";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useWishlist from "../zustand/wishListClice";
import Search from "../Components/Search";
import useCart from "../zustand/cartSlice";


export default function Prodcuts() {
     const fetchProdcuts = useProdcut (s => s.fetchProdcutsData)
     const prodcutsData = useProdcut (s => s.prodcutsData)
     const isPendingProdcutsData = useProdcut (s => s.isPendingProdcutsData)
     const page = useProdcut (s => s.page)
     const totalPages = useProdcut (s => s.totalPages)
    const wishlistData = useWishlist(s=>s.wishlistData)
    const cartData = useCart(s=>s.cartData)


     const [error ,setError] = useState('')
     useEffect(()=>{
      const handleFetchData = async()=>{

        const res = await fetchProdcuts()
        if(!res.success){
          const errMgs = res.message as string
          setError(errMgs)
        }else{
          setError('')
        }
      }
      handleFetchData()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[page])
  return (
    <Container>
      <Headung title="Shop Now"></Headung>
      <Search/>
      <div className=" flex items-center size-full gap-5 w-full justify-end">
        <Link to={'/wishlist'} className="flex items-center  relative -top-5">
        < FaHeart  className="text-3xl cursor-pointer  duration-300 hover:text-red-500 " />
          <span className="text-sm absolute top-5 -right-2 ">({wishlistData.length})</span>
        </Link>
        <Link to={'/cart'} className="flex items-center  relative -top-5">
        < HiShoppingCart className="text-3xl cursor-pointer duration-300 hover:text-(--main-color)  " />
          <span className="text-sm absolute top-5 -right-2" >({cartData.length})</span>
        </Link>
        
        
      </div>
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
