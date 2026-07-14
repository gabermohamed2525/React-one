import Container from '../Components/re-usable Com/Container'
import Headung from '../Components/re-usable Com/Headung'
import useWishlist from '../zustand/wishListClice'
import { useEffect } from 'react'
import useAuth from '../zustand/authSlice'
import BigProdcuts from '../Components/re-usable Com/BigProdcuts'
import { Link } from 'react-router-dom'

export default function WhisList() {
  const fetchwishlist =useWishlist( s=> s.fetchwishlist)
  const wishlistData =useWishlist( s=> s.wishlistData)
  const isPendingWishlist =useWishlist( s=> s.isPendingWishlist)
  const user =useAuth( s=> s.cuurentUser)
  useEffect(()=>{
    fetchwishlist()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
  console.log(wishlistData);
  
    return (
      <Container>
        <Headung title="  Wishlist page" user/>
               <Link to={'/prodcuts'} className="btn-in-o"> Back Shop</Link>
        
        { ! isPendingWishlist &&
          !wishlistData.length ?
          <div><p className='text-2xl font-black text-(--main-color) text-center '> No  Favourite Prodcuts is Here</p></div> 
          :
        <BigProdcuts 
              prodcutsData={wishlistData}
              isPending={isPendingWishlist}
              wish='on'

              />
        }
      </Container>
    )
}
