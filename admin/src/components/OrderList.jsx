import { useState, useEffect, useRef } from "react";
import { getOrders, deleteOrder } from "../api/orderApi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null); // Reference to the table

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

  const handleDelete = async (orderId) => {
    try {
      const { data } = await deleteOrder(orderId);
      toast.success(data.message);
      fetchOrders();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  };

  const downloadPDF = async () => {
    const table = tableRef.current;
    if (!table) return;

    // Action column is hidden in the table
    tableRef.current
      .querySelectorAll("th:last-child, td:last-child")
      .forEach((el) => (el.style.display = "none"));

    const canvas = await html2canvas(table, { useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Orders.pdf");

    // Action column is shown in the table
    tableRef.current
      .querySelectorAll("th:last-child, td:last-child")
      .forEach((el) => (el.style.display = "table-cell"));
  };

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
          <div ref={tableRef}>
            <table className="w-full border-collapse border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Address</th>
                  <th className="border border-gray-300 p-2">Contact Number</th>
                  <th className="border border-gray-300 p-2">Product</th>
                  <th className="border border-gray-300 p-2">Total</th>
                  <th className="border border-gray-300 p-2">Date and Time</th>
                  <th className="border border-gray-300 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="text-center">
                    <td className="border border-gray-300 p-2 align-top">
                      {order.name}
                    </td>
                    <td className="border border-gray-300 p-2 align-top">
                      {order.address}
                    </td>
                    <td className="border border-gray-300 p-2 align-top">
                      {order.contact}
                    </td>
                    <td className="border border-gray-300 p-2 align-top">
                      {order.products.map((product) => (
                        <div
                          key={product.productId._id}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={`http://localhost:3000/${product.productId.image}`}
                            alt={product.productId.name}
                            className="w-12 h-12 object-contain rounded"
                          />
                          <span className="mb-3">{product.productId.name}</span>
                        </div>
                      ))}
                    </td>
                    <td className="border border-gray-300 p-2 align-top">
                      {order.products.map((product) => (
                        <div key={product.productId._id}>
                          {product.productId.price} x {product.quantity} ={" "}
                          {product.quantity * product.productId.price}
                        </div>
                      ))}
                    </td>
                    <td className="border border-gray-300 p-2 align-top">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="text-red-500"
                      >
                        <RiDeleteBack2Fill size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={downloadPDF}
            className="mt-4 bg-blue-500 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 rounded block ml-auto"
          >
            Download as PDF
          </button>
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
