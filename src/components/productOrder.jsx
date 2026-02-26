import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../data/productsData";


function ProductOrder() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deadline, setDeadline] = useState("");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const price = size ? product.sizes[size] * quantity : 0;

  const handleOrder = () => {
    const message = `Hello, I would like to order:
Product: ${product.name}
Size: ${size}
Color: ${color}
Quantity: ${quantity}
Deadline: ${deadline}
Total Price: Ksh ${price}`;

    const whatsappURL = `https://wa.me/254700000000?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="order-page">
      <div className="order-container">
        <div className="order-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="order-form">
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {/* SIZE */}
          <label>Select Size</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Choose Size</option>
            {Object.keys(product.sizes).map((s) => (
              <option key={s} value={s}>
                {s} - Ksh {product.sizes[s]}
              </option>
            ))}
          </select>

          {/* COLOR */}
          <label>Color</label>
          <input
            type="text"
            placeholder="Enter preferred color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          {/* QUANTITY */}
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          {/* DEADLINE */}
          <label>Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <h3>Total: Ksh {price}</h3>

          <button
            className="submit-btn"
            disabled={!size}
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;