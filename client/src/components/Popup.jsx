import { useState } from "react";
import { useApp } from "../context/AppContext";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";
import jsPDF from "jspdf";

const Popup = ({ setShowPopup }) => {
  const { order, cart } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const [downloadPDF, setDownloadPDF] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrder = async () => {
    if (
      formData.name === "" ||
      formData.contact === "" ||
      formData.address === "" ||
      downloadPDF === null
    ) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      await order(formData);

      if (downloadPDF) {
        generatePDF();
      }

      setShowPopup(false);
    } catch (error) {
      toast.error("Failed to place order");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add order details to the PDF
    doc.setFontSize(18);
    doc.text("Order Details", 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Contact: ${formData.contact}`, 10, 30);
    doc.text(`Address: ${formData.address}`, 10, 40);

    doc.text("Products Ordered:", 10, 50);
    let y = 60;
    cart.forEach((item) => {
      doc.text(
        `- ${item.productId.name} (Quantity: ${item.quantity} | Price: Rs.${
          item.productId.price
        }) = Rs.${item.productId.price * item.quantity}`,
        10,
        y
      );
      y += 10;
    });

    doc.text(
      `Total: Rs.${cart.reduce(
        (acc, item) => acc + item.productId.price * item.quantity,
        0
      )}`,
      10,
      y + 10
    );

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    const thankYouText =
      "- Thank you for your order, We will deliver the order as soon as possible. -";
    const textWidth = doc.getTextWidth(thankYouText);
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - textWidth) / 2;
    doc.text(thankYouText, x, y + 20);

    // Save the PDF
    doc.save("order_details.pdf");
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
          <div>
            <p className="font-medium mb-2">
              Do you need a copy of this order details?
            </p>
            <div className="flex items-center space-x-4">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setDownloadPDF(true)}
              >
                {downloadPDF === true ? (
                  <IoCheckbox className="mr-2" />
                ) : (
                  <IoCheckboxOutline className="mr-2" />
                )}
                <span>Yes</span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setDownloadPDF(false)}
              >
                {downloadPDF === false ? (
                  <IoCheckbox className="mr-2" />
                ) : (
                  <IoCheckboxOutline className="mr-2" />
                )}
                <span>No</span>
              </div>
            </div>
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
            disabled={isLoading}
          >
            {isLoading ? "Processing ..." : "Confirm Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Popup;
