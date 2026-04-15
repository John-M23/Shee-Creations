import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = productsData.filter((product) =>
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="products-section" id="products">
      <h2 className="section-title">
        {category.toUpperCase()}
      </h2>

      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h3>Ksh {product.price}</h3>

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

export default CategoryPage;