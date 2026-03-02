import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
// import "./Products.css";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="products" id="Products">
      <h2 className="products-title">Our Products</h2>

      <div className="products-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <button
              className="shop-now"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;