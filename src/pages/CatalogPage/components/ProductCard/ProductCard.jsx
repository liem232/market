import { motion } from "framer-motion";
import styles from "./ProductCard.module.css"; 

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -8,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderColor: "#d0d0d0",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};
const imageVariants = {
  normal: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

function ProductCard({ product, index = 0 }) { 
  return (
    <motion.div 
      className={styles.productCard}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      custom={index}
      layout
    > 
      {/* Изображение товара */} 
      <div className={styles.productImage}> 
        <motion.img 
          src={product.image} 
          alt={product.name} 
          variants={imageVariants}
          initial="normal"
          whileHover="hover"
        /> 
      </div> 
      
      {/* Информация о товаре */} 
      <motion.div 
        className={styles.productInfo}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.2 + (index * 0.1),
          duration: 0.4 
        }}
      > 
        {/* ID товара */} 
        <motion.span 
          className={styles.productId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + (index * 0.1) }}
        >
          ID: {product.id}
        </motion.span> 
        
        {/* Название товара */} 
        <motion.h3 
          className={styles.productName}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 + (index * 0.1) }}
        >
          {product.name}
        </motion.h3> 
        
        {/* Описание товара */} 
        <motion.p 
          className={styles.productDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + (index * 0.1) }}
        > 
          {/* Обрезаем длинное описание до 150 символов */} 
          {product.description && product.description.length > 150 
            ? product.description.substring(0, 150) + "..." 
            : product.description || "Описание отсутствует"} 
        </motion.p> 
      </motion.div> 
    </motion.div>
  ); 
} 

export default ProductCard;