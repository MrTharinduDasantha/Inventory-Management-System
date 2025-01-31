import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tharindu Dasantha",
    image:
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "We can buy products under various categories and also we can order online. It is a great platform for us to buy our required products.",
    rating: 4,
  },
  {
    name: "Dilini Prasadika",
    image:
      "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "We can order our products online and we can get them delivered on time. I think this is one of the best platforms for us to buy products.",
    rating: 5,
  },
  {
    name: "Janith Lakshan",
    image:
      "https://images.unsplash.com/photo-1620228922597-cca58f177310?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Best inventory management system I have used so far. Easy to navigate and very efficient. I can order products online and get them delivered on time.",
    rating: 3,
  },
];

const Testimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };
  return (
    <section
      id="testimonials"
      className="py-12 px-10 bg-gray-100 overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Testimonial */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="w-24 h-24 rounded mb-4 object-scale-down"
          />
          <h3 className="text-base font-medium">{testimonials[0].name}</h3>
          <div className="flex space-x-1 mt-1">
            {renderStars(testimonials[0].rating)}
          </div>
          <p className="text-gray-700 text-center text-sm mt-2">
            {testimonials[0].message}
          </p>
        </motion.div>

        {/* Middle Testimonial */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={testimonials[1].image}
            alt={testimonials[1].name}
            className="w-24 h-24 rounded mb-4 object-scale-down"
          />
          <h3 className="text-base font-medium">{testimonials[1].name}</h3>
          <div className="flex space-x-1 mt-1">
            {renderStars(testimonials[1].rating)}
          </div>
          <p className="text-gray-700 text-center text-sm mt-2">
            {testimonials[1].message}
          </p>
        </motion.div>

        {/* Right Testimonial */}
        <motion.div
          initial={{ x: 100, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={testimonials[2].image}
            alt={testimonials[2].name}
            className="w-24 h-24 rounded mb-4 object-scale-down"
          />
          <h3 className="text-base font-medium">{testimonials[2].name}</h3>
          <div className="flex space-x-1 mt-1">
            {renderStars(testimonials[2].rating)}
          </div>
          <p className="text-gray-700 text-center text-sm mt-2">
            {testimonials[2].message}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
