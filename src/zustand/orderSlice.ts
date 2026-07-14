import { create } from "zustand";
import type { TcartProduct } from "./cartSlice";

type Tcustomer = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

export type Torder = {
  id: string;
  date: string;
  customer: Tcustomer;
  products: TcartProduct[];
  totalItems: number;
  totalPrice: number;
};

type Tresponse = {
  success: boolean;
  message?: string;
};

type TorderSlice = {
  orders: Torder[];

  loadOrders: () => void;

  addOrder: (
    customer: Tcustomer,
    products: TcartProduct[],
    totalItems: number,
    totalPrice: number
  ) => Tresponse;

  deleteOrder: (id: string) => void;

  clearOrders: () => void;
};

const useOrder = create<TorderSlice>((set, get) => ({
  orders: [],

  loadOrders: () => {
    const data = localStorage.getItem("orders");

    if (!data) return;

    set({
      orders: JSON.parse(data),
    });
  },

  addOrder: (
    customer,
    products,
    totalItems,
    totalPrice
  ) => {
    const orders = [...get().orders];

    const newOrder: Torder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleString(),

      customer,

      products,

      totalItems,

      totalPrice,
    };

    orders.unshift(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    set({
      orders,
    });

    return {
      success: true,
      message: "Order Placed Successfully",
    };
  },

  deleteOrder: (id) => {
    const orders = get().orders.filter(
      (el) => el.id !== id
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    set({
      orders,
    });
  },

  clearOrders: () => {
    localStorage.removeItem("orders");

    set({
      orders: [],
    });
  },
}));

export default useOrder;