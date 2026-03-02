import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../data/productsData";

function ProductOrder() {
  const { id } = useParams();

  // Convert id to number safely
  const product = productsData.find(
    (p) => p.id === Number(id)
  );

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deadline, setDeadline] = useState("");

  // If product does not exist
  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  // Calculate price safely
  const unitPrice = size ? product.sizes[size] : 0;
  const totalPrice = unitPrice * quantity;

  const handleOrder = () => {
    if (!size || !color || !deadline) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `
Hello Sheeh Collection,

I would like to order:

Product: ${product.name}
Size: ${size}
Color: ${color}
Quantity: ${quantity}
Deadline: ${deadline}
Total Price: Ksh ${totalPrice}
    `;

    const whatsappURL = `https://wa.me/254110304492?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="order-page">
      <div className="order-container">
        {/* PRODUCT IMAGE */}
        <div className="order-image">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* ORDER FORM */}
        <div className="order-form">
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {/* SIZE */}
          <label>Select Size *</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Choose Size</option>
            {Object.keys(product.sizes).map((s) => (
              <option key={s} value={s}>
                {s} - Ksh {product.sizes[s]}
              </option>
            ))}
          </select>

          {/* COLOR */}
          <label>Color *</label>
          <input
            type="text"
            placeholder="Enter preferred color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          {/* QUANTITY */}
          <label>Quantity *</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
          />

          {/* DEADLINE */}
          <label>Deadline *</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <h3>Total: Ksh {totalPrice}</h3>

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