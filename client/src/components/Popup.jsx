import { useState } from "react";
import { useApp } from "../context/AppContext";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const Popup = ({ setShowPopup }) => {
  const { order } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrder = () => {
    if (
      formData.name === "" ||
      formData.contact === "" ||
      formData.address === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }
    setShowPopup(false);
    order(formData);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Enter Order Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your address"
            />
          </div>
        </form>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => setShowPopup(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleOrder}
            className="bg-blue-600 px-4 py-2 text-white rounded"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
};

export default Popup;
