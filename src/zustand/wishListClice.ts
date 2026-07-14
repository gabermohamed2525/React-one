import {create} from 'zustand'
import type { Tresponse, TuserData } from './authSlice'
import type { TprodcutData } from './prodcutSlice'
import useAuth from './authSlice'
import axios from 'axios'
import { toast } from 'react-toastify'
type TwishlistData ={
    // loadWishlist(): unknown
    wishlistData : TprodcutData[],
    isPendingWishlist: boolean,
    _validateUser :()=> null | TuserData,
    likeOrDislike : (product : TprodcutData)=> Promise <Tresponse>,
    fetchwishlist : ()=> Promise <void>
    clearWishlist : ()=> void
}
const endPoint = 'http://localhost:5000/wishlist'
 const useWishlist = create<TwishlistData>((set , get)=>({
    wishlistData : [],
    isPendingWishlist : false,
    _validateUser :()=>{
        const user= useAuth.getState().cuurentUser
        return user
    },
    likeOrDislike : async(product)=> {
        const {_validateUser , wishlistData} = get()
        const user = _validateUser()
       if(!user){
        return {success:false, message:'noAuth'}
        
    }
    try {
const isExisted = await axios.get(`${endPoint}?userId=${user.id}&&prodcutId=${product.id}`)
        if(!isExisted.data.length){
            const data ={
                prodcutId : product.id ,
                userId : user.id ,
                payload : product
            }
            await axios.post(endPoint , data)
            set({wishlistData :[...wishlistData, product]}) 
            return { success: true,message :'Add'}
            
        }else{
            const wishlisId =  isExisted.data[0].id
            await axios.delete(`${endPoint}/${wishlisId}`)
            set({wishlistData : wishlistData.filter(el => el.id !== product.id)})
            return { success: true , message : 'Delete'}
        }

    } catch (error) {
        const err = error as Error
        return{success: false , message: err.message}
    }
        
    },
    fetchwishlist : async()=>{
        const {_validateUser} = get()
        const user = _validateUser()
       if(!user){
        return
        }
        set({isPendingWishlist: true })
        try {
            await new Promise ((res)=> setTimeout(res ,1000))
            const {data} =await axios.get(`${endPoint}?userId=${user.id}`)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const payload = data.map((el : any )=>el.payload)
            set({wishlistData : payload})
        } catch (error) {
            const err = error as Error
            toast.error(err.message);
            
        }finally{
            set({isPendingWishlist: false})
        }
    },
    clearWishlist : ()=> set({wishlistData: []}),
 }))
 export default useWishlist