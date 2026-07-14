import { useEffect } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

import useOrder from "../zustand/orderSlice";

export default function Orders() {
  const orders = useOrder((state) => state.orders);
  const loadOrders = useOrder((state) => state.loadOrders);
  const deleteOrder = useOrder((state) => state.deleteOrder);

  useEffect(() => {
    loadOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Delete Order?",
      text: "You won't be able to recover it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrder(id);

        Swal.fire({
          icon: "success",
          title: "Order Deleted",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  if (!orders.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">
          No Orders Yet
        </h2>

        <p className="text-gray-500 mt-4">
          Your orders will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-8">
        My Orders
      </h2>

      <div className="flex flex-col gap-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div>
                <h3 className="font-bold text-xl">
                  {order.id}
                </h3>

                <p className="text-gray-500">
                  {order.date}
                </p>
              </div>

              <Button
                color="error"
                variant="contained"
                onClick={() => handleDelete(order.id)}
              >
                Delete
              </Button>
            </div>

            <hr className="my-5" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Name:</strong>{" "}
                  {order.customer.fullName}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {order.customer.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {order.customer.phone}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {order.customer.city}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {order.customer.address}
                </p>

                {order.customer.notes && (
                  <p>
                    <strong>Notes:</strong>{" "}
                    {order.customer.notes}
                  </p>
                )}
              </div>

              <div>
                <p>
                  <strong>Total Items:</strong>{" "}
                  {order.totalItems}
                </p>

                <p>
                  <strong>Total Price:</strong>{" "}
                  ${order.totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            <h4 className="font-bold text-xl mt-8 mb-4">
              Products
            </h4>

            <div className="space-y-3">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between border rounded-lg p-3"
                >
                  <span>{product.name}</span>

                  <span>
                    {product.quantity} × $
                    {product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}