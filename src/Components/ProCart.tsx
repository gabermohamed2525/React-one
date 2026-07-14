import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  FaHeart } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import type { TprodcutData } from "../zustand/prodcutSlice";
import useWishlist from "../zustand/wishListClice";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import useCart from "../zustand/cartSlice";

function ProCart({ id ,image , price , name}:TprodcutData) {
  const navigate =useNavigate()
  const likeOrDislike =useWishlist( s=>s.likeOrDislike)
  const wishlistData =useWishlist( s=>s.wishlistData)
  const isLiked = wishlistData.some((el)=> el.id === id)
  const addToCart = useCart((s) => s.addToCart);
    const whisListHandler = async(id:number , name:string ,price:number , image:string)=>{
      const product = {id , name , price , image}
      const res = await likeOrDislike(product)
      if(res.success){
                  Swal.fire({
                  title: `Success <span class='${res.message=== 'Add' ? 'text-green-600' : 'text-red-600' }'>${res.message}</span> prodcut <br/> ( ${name .split(' ').slice(1,3).join(' ')} )`,
                  text: "Alert  from Wishlist",
                  icon: "success",
                  timer: 3000,
                  showConfirmButton: false
                });
                
      }else{
      if (res.message === "noAuth") {
          Swal.fire({
            title: "Login First...",
            text: "Alert from Wishlist",
            icon: "warning",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/log-in");
            } else {
              toast.error(res.message); // هنا res هو Response الـ API
            }
          });
        }
      
      }
      
      
      
    };

    const cartHandler = () => {
  const res = addToCart({
    id,
    name,
    price,
    image,
  });

  if (res.success) {
    toast.success(res.message);

    navigate("/cart");
  }
};
  return (
    <>
    
    <div className="flex justify-center py-8 ">
      
      <div className="card border-2 relative border-(--main-color) group w-87.5 rounded-xl overflow-hidden duration-500 hover:-translate-y-2">
      {isLiked && (
      <div className="absolute right-6 top-5">
        <FaHeart className="text-2xl animate-pulse text-(--main-color)"/>
      </div>

      )}
        {/* Image */}
        <div className="relative h-90 flex items-center justify-center p-5 overflow-hidden">

          <img
            src={image}
            alt="Headphones"
            className="w-53.5 object-contain select-none pointer-events-none" draggable={false}
          />

          {/* Time */}
          <div className="absolute top-5 left-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--main-color)">
            <MdOutlineAccessTime />
            <span>In 4 Days</span>
          </div>


          {/* Favorite */}
          <button
            className={`
              absolute bottom-5 right-5
            w-11 h-11 rounded-full 
            ${isLiked ? 'text-(--main-color) bg-white' : 'text-white bg-(--main-color)'} shadow-lg
            scale-0 group-hover:scale-100
            duration-300
            flex items-center justify-center text-2xl
            cursor-pointer 
            hover:bg-amber-900
              
              `}
            onClick={()=>whisListHandler(id ,name , price , image)}
          >
            
            <FaHeart />
          </button>

        </div>

        {/* Content */}
        <div className="px-7 pb-7">

          <p className="hoo uppercase tracking-[4px] text-sm mb-2">
            E-Sports
          </p>

          <div className="flex justify-between items-center">

            <Link
              to=""
              className="text-lg font-black duration-300 hover:text-(--main-color)"
            >
              {name .split(' ').slice(1,3).join(' ')}
            </Link>

            <span className="text-2xl font-black text-(--main-color)">
              ${price}
            </span>

          </div>

          <div className="h-px w-full bg-white/10 my-6"></div>

          <button 
          onClick={cartHandler}
            className="btn-s-m
            w-full
            h-14
            flex
            items-center
            justify-center
            gap-3
            text-base
            uppercase
            tracking-wider"
          >
            <FaPlus />
            Add To Cart
          </button>

        </div>

      </div>
    </div>
    </>
  );
}

export default memo(ProCart);