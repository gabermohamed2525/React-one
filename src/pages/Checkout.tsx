import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Inputs from "../Components/Inputs";
import useCart from "../zustand/cartSlice";
import useOrder from "../zustand/orderSlice";

import {
  checkoutSchema,
  type TcheckoutForm,
} from "../../src/validations/checkoutValid";

export default function Checkout() {
  const navigate = useNavigate();

  const cartData = useCart((state) => state.cartData);
  const totalItems = useCart((state) => state.totalItems);
  const totalPrice = useCart((state) => state.totalPrice);
  const clearCart = useCart((state) => state.clearCart);

  const addOrder = useOrder((state) => state.addOrder);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TcheckoutForm>({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      notes: "",
    },
  });

  const onSubmit = (data: TcheckoutForm) => {
    if (!cartData.length) {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty",
        text: "Please add products before checkout.",
      });

      return;
    }

    const res = addOrder(
      {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        address: data.address,
        notes: data.notes ?? "",
      },
      cartData,
      totalItems,
      totalPrice
    );

    if (res.success) {
      clearCart();

      reset();

      Swal.fire({
        icon: "success",
        title: res.message,
        timer: 1800,
        showConfirmButton: false,
      });

      navigate("/orders");
    }
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Checkout
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
                <Inputs
          type="text"
          label="Full Name"
          name="fullName"
          register={register}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />

        <Inputs
          type="email"
          label="Email"
          name="email"
          register={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Inputs
          type="text"
          label="Phone"
          name="phone"
          register={register}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Inputs
          type="text"
          label="City"
          name="city"
          register={register}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <Inputs
          type="text"
          label="Address"
          name="address"
          register={register}
          error={!!errors.address}
          helperText={errors.address?.message}
        />

        <Inputs
          type="text"
          label="Notes"
          name="notes"
          register={register}
          multiline
          rows={4}
          error={!!errors.notes}
          helperText={errors.notes?.message}
        />
                <div className="w-full max-w-xl rounded-xl border p-6 shadow-md bg-white mt-5">
          <h3 className="text-2xl font-semibold mb-5">
            Order Summary
          </h3>

          <div className="flex justify-between border-b py-3">
            <span>Total Products</span>
            <span>{cartData.length}</span>
          </div>

          <div className="flex justify-between border-b py-3">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between border-b py-3">
            <span>Total Price</span>
            <span className="font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: "18px",
            }}
          >
            Place Order
          </Button>
        </div>
              </form>
    </div>
  );
 }