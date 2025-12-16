<<<<<<< HEAD
import styles from "./ProductCard.module.css"; 
=======
import "./ProductCard.module.css"; 
>>>>>>> 1667c58c4fd17e87f1d3d1a6bc8ebe9dc4094eab
// Компонент карточки товара 
function ProductCard({ product }) { 
  return (
    <div className="productCard"> 
      {/* Изображение товара */} 
      <div className="productImage"> 
        <img src={product.image} alt={product.name} /> 
      </div> 
      {/* Информация о товаре */} 
      <div className="product-info"> 
        {/* ID товара */} 
        <span className="product-id">ID: {product.id}</span> 
        {/* Название товара */} 
        <h3 className="product-name">{product.name}</h3> 
        {/* Описание товара */} 
        <p className="product-description"> 
          {/* Обрезаем длинное описание до 150 символов */} 
          {product.description && product.description.length > 150 
            ? product.description.substring(0, 150) + "..." 
            : product.description || "Описание отсутствует"} 
        </p> 
      </div> 
    </div>
  ); 
} 
export default ProductCard; 