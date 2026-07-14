import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";

import Container from "../Components/re-usable Com/Container";
import Headung from "../Components/re-usable Com/Headung";
import useCart from "../zustand/cartSlice";
import useAuth from "../zustand/authSlice";


export default function CartBage() {

  const cartData = useCart((s) => s.cartData);

  const totalPrice = useCart((s) => s.totalPrice);

  const totalItems = useCart((s) => s.totalItems);

  const loadCart = useCart((s) => s.loadCart);

  const increaseQty = useCart((s) => s.increaseQty);

  const decreaseQty = useCart((s) => s.decreaseQty);

  const removeFromCart = useCart((s) => s.removeFromCart);

  const clearCart = useCart((s) => s.clearCart);

  const cuurentUser = useAuth((s) => s.cuurentUser);

  useEffect(() => {
    loadCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>

      <Headung title="Shopping Cart" />
      {
  cartData.length === 0 ? (

    <div className="flex flex-col items-center justify-center py-28">

      <FaShoppingCart className="text-8xl text-orange-500 mb-8" />

      <h2 className="text-4xl font-black mb-4">

        Your Cart Is Empty

      </h2>

      <p className="text-gray-400">

        Looks like you haven't added anything yet.

      </p>

      <Link
        to="/prodcuts"
        className="btn-in-o mt-10 px-10 py-4"
      >
        Continue Shopping
      </Link>

    </div>

  ) : (

    <div className="grid lg:grid-cols-3 gap-10 mt-12">

<div className="lg:col-span-2 space-y-6">
  {cartData.map((item) => (

  <div
    key={item.id}
    className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-orange-500/20 bg-[#1b1b1b] p-6 hover:border-orange-500 duration-300"
  >

    {/* Product */}

    <div className="flex items-center gap-6">

      <img
        src={item.image}
        alt={item.name}
        className="w-36 h-36 object-contain rounded-xl bg-[#252525] p-3"
      />

      <div>

        <h2 className="text-2xl font-bold">
          {item.name.split(" ").slice(0, 3).join(" ")}
        </h2>

        <p className="text-orange-500 text-2xl font-black mt-3">
          ${item.price}
        </p>

      </div>

    </div>

    {/* Quantity */}

    <div className="flex flex-col items-center gap-4">

      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQty(item.id)}
          className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center"
        >
          <FaMinus />
        </button>

        <span className="text-2xl font-black w-10 text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQty(item.id)}
          className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
        >
          <FaPlus />
        </button>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-600 flex items-center gap-2 font-bold"
      >
        <FaTrash />
        Remove
      </button>

    </div>

    {/* Total */}

    <div>

      <h3 className="text-3xl font-black text-orange-500">

        ${(item.price * item.quantity).toFixed(2)}

      </h3>

    </div>

  </div>

))}
</div>
<div className="h-fit rounded-3xl bg-[#1b1b1b] border border-orange-500/30 p-8 sticky top-30">

  <h2 className="text-3xl font-black mb-8">
    Cart Summary
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between text-lg">

      <span>Total Items</span>

      <span className="font-bold text-orange-500">

        {totalItems}

      </span>

    </div>

    <div className="flex justify-between text-lg">

      <span>Total Price</span>

      <span className="font-bold text-orange-500">

        ${totalPrice.toFixed(2)}

      </span>

    </div>

  </div>

  <div className="h-px bg-white/10 my-8"></div>

  <button
    onClick={clearCart}
    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 duration-300 font-bold"
  >
    Clear Cart
  </button>

  <Link
    to="/prodcuts"
    className="mt-5 flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-orange-500 hover:bg-orange-500 duration-300 font-bold"
  >
    <FaArrowLeft />
    Continue Shopping
  </Link>

  {
    cuurentUser ? (

      <Link
        to="/checkout"
        className="mt-5 flex items-center justify-center w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 duration-300 font-bold"
      >
        Checkout
      </Link>

    ) : (

      <Link
        to="/log-in"
        className="mt-5 flex items-center justify-center w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 duration-300 font-bold"
      >
        Login First
      </Link>

    )
  }

</div>
       </div>

  )}

</Container>
  )}