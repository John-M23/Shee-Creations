import { useParams, useNavigate  } from "react-router-dom";
import productsData from "../data/productsData";


function CategoryPage() {
    const {category} = useParams();
    const navigate = useNavigate();


    // Filter products based on category
    const filteredProducts = productsData.filter ((product) =>
        product.category === category);

    return (
<section className="products-section" id="products">
<h2 className="section-title">
    {category.toUpperCase()}
</h2>

<div className="products-list">
    {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
            {/* PRODUCT IMAGE */}
            <img
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h3>Ksh {product.prize}</h3>
    
    <button className="shop-now" onClick={() => navigate(`/product/${product.id}`)}>
                Order Now   
    </button>
        </div>
    ))}
</div>
</section>
    );
}

 export default CategoryPage;



