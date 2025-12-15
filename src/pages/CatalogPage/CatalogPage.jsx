import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../CatalogPage/CatalogPage.module.css"
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://torguisam.ru/api/product/oksei-all-products"
      );
      setProducts(response.data.slice(0, 10));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductCreated = () => {
    fetchProducts();
    setShowCreateForm(false);
  };

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <>
      <Header />

      <main className={styles.app}><div className="container">
        <h1>Каталог товаров</h1>

        <div className={styles.createProductSection}>
          <button
            className="toggle-form-button"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? "Скрыть форму" : "Создать новый товар"}
          </button>
        </div>

        {showCreateForm && (
          <CreateProductForm onProductCreated={handleProductCreated} />
        )}

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div></div >
      </main>
    </>
  );
}

export default CatalogPage;