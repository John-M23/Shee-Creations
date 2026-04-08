import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-section" id="products">
      <h2 className="section-title">Our Products</h2>

      <div className="products-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            
            {/* PRODUCT IMAGE */}
            <img
              src={product.image}
              alt={product.name}
            />

            {/* PRODUCT INFO */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h3>Ksh {product.prize}</h3>

            {/* PRICE (optional if exists in data) */}
            {/* {product.price && (
              <span className="price">Ksh {product.price}</span>
            )} */}

            {/* BUTTON */}
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