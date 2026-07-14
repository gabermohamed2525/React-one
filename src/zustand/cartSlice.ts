import { create } from "zustand";
import type { TprodcutData } from "./prodcutSlice";


type Tresponse = {
  success: boolean;
  message?: string;
};

export type TcartProduct = TprodcutData & {
  quantity: number;
};

type TcartSlice = {
  cartData: TcartProduct[];

  totalPrice: number;

  totalItems: number;

  addToCart: (product: TprodcutData) => Tresponse;

  removeFromCart: (id: number) => void;

  increaseQty: (id: number) => void;

  decreaseQty: (id: number) => void;

  clearCart: () => void;

  loadCart: () => void;

  calculateCart: () => void;

  getTotalPrice: () => number;
};

const useCart = create<TcartSlice>((set, get) => ({
  cartData: [],

  totalPrice: 0,

  totalItems: 0,

  addToCart: (product) => {
    const cart = [...get().cartData];

    const index = cart.findIndex((el) => el.id === product.id);

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    set({
      cartData: cart,
    });

    get().calculateCart();

    return {
      success: true,
      message: "Product Added Successfully",
    };
  },

  removeFromCart: (id) => {
    const cart = get().cartData.filter((el) => el.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    set({
      cartData: cart,
    });

    get().calculateCart();
  },

  increaseQty: (id) => {
    const cart = [...get().cartData];

    const item = cart.find((el) => el.id === id);

    if (item) {
      item.quantity++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    set({
      cartData: cart,
    });

    get().calculateCart();
  },

  decreaseQty: (id) => {
    let cart = [...get().cartData];

    const item = cart.find((el) => el.id === id);

    if (!item) return;

    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart = cart.filter((el) => el.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    set({
      cartData: cart,
    });

    get().calculateCart();
  },

  clearCart: () => {
    localStorage.removeItem("cart");

    set({
      cartData: [],
      totalItems: 0,
      totalPrice: 0,
    });
  },

  loadCart: () => {
    const data = localStorage.getItem("cart");

    if (!data) return;

    const cart: TcartProduct[] = JSON.parse(data);

    set({
      cartData: cart,
    });

    get().calculateCart();
  },

  calculateCart: () => {
    const cart = get().cartData;

    let totalPrice = 0;

    let totalItems = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;

      totalItems += item.quantity;
    });

    set({
      totalPrice,
      totalItems,
    });
  },

  getTotalPrice: () => {
    const cart = get().cartData;

    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCart;