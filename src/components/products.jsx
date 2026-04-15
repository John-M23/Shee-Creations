import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";

function Products() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  // FILTER PRODUCTS
  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="products-section" id="products">
      <h2 className="section-title">Our Products</h2>

      {/* CATEGORY BUTTONS */}
      <div className="category-button">
        <button
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>

        <button
          className={activeCategory === "accessories" ? "active" : ""}
          onClick={() => setActiveCategory("accessories")}
        >
          Accessories
        </button>

        <button
          className={activeCategory === "ladies" ? "active" : ""}
          onClick={() => setActiveCategory("ladies")}
        >
          Ladies
        </button>

        <button
          className={activeCategory === "mens" ? "active" : ""}
          onClick={() => setActiveCategory("mens")}
        >
          Mens
        </button>

        <button
          className={activeCategory === "toddlers" ? "active" : ""}
          onClick={() => setActiveCategory("toddlers")}
        >
          Toddlers
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">

            {/* IMAGE */}
            <img src={product.image} alt={product.name} />

            {/* INFO */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {/* PRICE */}
            <h3>Ksh {product.price}</h3>

            {/* ORDER BUTTON */}
            <button
              className="shop-now"
             onClick={() => {
  navigate(`/product/${product.id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}
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