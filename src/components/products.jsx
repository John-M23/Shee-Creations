import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="Products">
      <div className="product-list">
        {productsData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <button
              className="shop-now"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Customize & Order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};