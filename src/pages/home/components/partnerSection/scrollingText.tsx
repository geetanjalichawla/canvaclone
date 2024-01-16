import { motion } from "framer-motion";
import PropTypes from 'prop-types';

interface ScrollTextProps {
  images: string[]; 
}

const ScrollText: React.FC<ScrollTextProps> = ({ images }) => {
  return (
    <div
      id="scroll-container"
      className="overflow-hidden w-full relative font-bold font-SansitaSwashed px-8"
    >
      <motion.div
        style={{ width: "max-content" }}
        id="scroll-text"
        className="flex items-center whitespace-nowrap over"
        animate={{
          x: ["0%", "-30%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex space-x-4 mt-4 relative z-10 w-max">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className="h-14 object-cover rounded-full"
            />
          ))}
        </div>

       </motion.div>
        <div className="absolute top-0 left-0 w-1/3  bottom-0 bg-gradient-to-r from-white to-transparent " />
        <div className="absolute top-0 right-0 w-1/3  bottom-0 bg-gradient-to-l from-white to-transparent " />
  
    </div>
  );
};

ScrollText.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ScrollText;
