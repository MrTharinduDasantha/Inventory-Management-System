import { useState, useEffect } from "react";
import { getOrders } from "../api/orderApi";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const { data } = await getOrders();
      setOrders(data.orders);
    } catch (error) {
      console.error(error.response?.data?.message || "Error fetching orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center text-xl font-bold">
        Loading Orders...
      </div>
    );
  }

  return (
    <>
      {orders.length ? (
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Orders</h2>
          <table className="w-full border-collapse border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">Product Name</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Total</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.products.map((product, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {product.productId.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {product.quantity}
                    </td>
                    <td className="border border-gray-300 p-2 flex justify-center">
                      <img
                        src={`http://localhost:3000/${product.productId.image}`}
                        alt={product.productId.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      Rs.{product.quantity * product.productId.price}/=
                    </td>
                    <td className="border border-gray-300 p-2">
                      {order.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[100vh] flex items-center justify-center text-xl font-bold">
          No Orders Found
        </div>
      )}
    </>
  );
};

export default OrderList;
