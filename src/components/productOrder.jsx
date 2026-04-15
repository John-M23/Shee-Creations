import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import productsData from "../data/productsData";

function ProductOrder() {
  const { id } = useParams();

  const product = productsData.find(
    (p) => p.id === Number(id)
  );

  // SAFE DEFAULTS
  const firstSize =
    product?.sizes ? Object.keys(product.sizes)[0] : "";

  const [size, setSize] = useState(firstSize);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deadline, setDeadline] = useState("");

  const phoneNumber = "254704464147";

  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  // 💰 LIVE PRICE CALCULATION
  const unitPrice = useMemo(() => {
    if (product.sizes && size) {
      return product.sizes[size];
    }
    return product.price || 0;
  }, [size, product]);

  const totalPrice = unitPrice * quantity;

  // 📲 WHATSAPP ORDER
  const handleOrder = () => {
    if (!size || !color || !deadline) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `
🧶 *Sheeh Collection Order*

📦 Product: ${product.name}
📏 Size: ${size}
🎨 Color: ${color}
🔢 Quantity: ${quantity}
📅 Deadline: ${deadline}

💰 Unit Price: Ksh ${unitPrice}
💵 Total: Ksh ${totalPrice}

Thank you for your order ❤️
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="order-page">
      <div className="order-container">

        {/* IMAGE */}
        <div className="order-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* FORM */}
        <div className="order-form">

          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {/* SIZE */}
          {product.sizes && (
            <>
              <label>Size *</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {Object.keys(product.sizes).map((s) => (
                  <option key={s} value={s}>
                    {s} - Ksh {product.sizes[s]}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* COLOR */}
          <label>Color *</label>
          <input
            type="text"
            placeholder="e.g. Pink, Black, White"
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

          {/* PRICE DISPLAY */}
          <div className="price-box">
            <p>Unit Price: <b>Ksh {unitPrice}</b></p>
            <h3>Total: Ksh {totalPrice}</h3>
          </div>

          {/* ORDER BUTTON */}
          <button
            className="submit-btn"
            onClick={handleOrder}
          >
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductOrder;