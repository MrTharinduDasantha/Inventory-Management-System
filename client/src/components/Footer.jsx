import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-10 flex justify-between items-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Inventory Management System | All
        rights reserved.
      </p>

      <div className="flex space-x-6">
        <FaFacebook className="text-white text-xl hover:text-blue-500 cursor-pointer transition-colors duration-300" />
        <FaWhatsapp className="text-white text-xl hover:text-green-500 cursor-pointer transition-colors duration-300" />
        <FaYoutube className="text-white text-xl hover:text-red-500 cursor-pointer transition-colors duration-300" />
      </div>
    </footer>
  );
};

export default Footer;
