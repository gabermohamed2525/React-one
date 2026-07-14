import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Button ,Menu ,MenuItem} from '@mui/material';
import { useState } from 'react';
import useAuth from "../zustand/authSlice";
import Spiner from "./re-usable Com/Spiner";
import useWishlist from "../zustand/wishListClice";
export default function AuthBtn() {
    
    const [anchorEl, setAnchorEl] =useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      
      const signOut = useAuth(s=>s.signOut)
      const isPendingSignout = useAuth(s=>s.isPendingSignout)
      const clearWishlist = useWishlist(s=>s.clearWishlist)
      const handleLogout = async()=>{
         await signOut()
        handleClose()
        clearWishlist()
      }
       const cuurentUser = useAuth(s=>s.cuurentUser)
     const isPendingCurrentUser = useAuth(s=>s.isPendingCurrentUser)
     if(isPendingCurrentUser){
      return <Spiner/>
     }
  return (
    <div>
      {!cuurentUser ?(
                <div className="logIn flex gap-3 items-center justify-center h-10  bg-black border-r-3 border-(--main-color)  px-5 py-3">
                  <FaEdit className="bg-(--secondary-color) cursor-pointer duration-300 hover:text-color-(--main-color) " />
                  <Link to={'log-in'} className="uppercase font-bold text-sm cursor-pointer duration-300 hover:text-color-(--main-color) ">Log In</Link>
                </div>
                ) : (
                  <div>
                    <div>
            <Button
              id="demo-positioned-button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={handleClick}
            >
              <div className='capitalize text-(--main-color) flex items-center gap-2 text-lg'><p className='text-white'>welcome</p> {cuurentUser.userName .split(' ').slice(0,1).join(' ')}</div>
            </Button>
            <Menu
              id="demo-positioned-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{color:'white'}}
             
              
            >
              <MenuItem onClick={handleClose} className='capitalize' sx={{width:'150px'}}>
              <Link to={'/profile'} className='size-full block text-center'>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose} className='capitalize' sx={{width:'150px'}}>
              <Link to={'/orders'} className='size-full block text-center'>Orders</Link>
              </MenuItem>
              <MenuItem onClick={handleLogout} className='capitalize' sx={{width:'150px'}}>
              <button 
              disabled= { isPendingSignout}
               className='size-full rounded disabled:opacity-50 disabled:cursor-not-allowed bg-red-700 text-white text-center p-1 duration-300 hover:not-disabled:bg-red-800 hover:not-disabled:cursor-pointer'>{isPendingSignout ? "Singing Out" : 'Logout'}</button>
              </MenuItem>
            </Menu>
          </div>
        
                    
                  </div>
            )}
    </div>
  )
}
