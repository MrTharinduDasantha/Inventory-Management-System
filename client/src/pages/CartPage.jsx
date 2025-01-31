import { useApp } from "../context/AppContext";
import { useState } from "react";
import Popup from "../components/Popup";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useApp();
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-6">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <p className="bg-white p-6 rounded shadow-lg">
            Please wait until the order details copy is downloaded.
          </p>
        </div>
      )}

      <div className="bg-white border rounded shadow-md p-4">
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        {cart.length > 0 ? (
          <>
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.productId._id}
                  className="flex items-center justify-between border border-gray-300 p-4 rounded"
                >
                  <img
                    src={`http://localhost:3000/${product.productId.image}`}
                    alt={product.productId.name}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-lg font-medium">
                    {product.productId.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        decreaseQuantity(product._id, product.quantity - 1)
                      }
                      disabled={product.quantity <= 1}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() =>
                        increaseQuantity(product._id, product.quantity + 1)
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-700">
                    Rs.{product.productId.price}/=
                  </p>
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="text-red-600 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold">
                Total: Rs.
                {cart.reduce(
                  (acc, item) => acc + item.productId.price * item.quantity,
                  0
                )}
                /=
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 rounded"
              >
                Order Now
              </button>
            </div>
          </>
        ) : (
          <p className="text-lg font-semibold">Your cart is empty</p>
        )}
      </div>

      {showPopup && (
        <Popup setShowPopup={setShowPopup} setIsLoading={setIsLoading} />
      )}
    </div>
  );
};

export default CartPage;
