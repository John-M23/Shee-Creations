import React, { useState } from "react";
import product1 from "../assets/images/products/crotchet1.png";

const phoneNumber = "254110304492";

const productsData = [
  {
    id: 1,
    name: "Crochet Pink Top",
    image: product1,
    description: "Handmade crochet top.",
    sizes: {
      XL: 2300,
      XXL: 2600,
      XXXL: 3000,
    },
  },
  {
    id: 2,
    name: "Crochet Hat",
    image: product1,
    description: "Warm crochet hat.",
    sizes: {
      Toddler: 1200,
      Adult: 1800,
    },
  },
  {
    id: 3,
    name: "Crochet Bag",
    image: product1,
    description: "Stylish handmade bag.",
    sizes: {
      "One Size": 3500,
    },
  },


 {
    id: 3,
    name: "Crochet Bag",
    image: product1,
    description: "Stylish handmade bag.",
    sizes: {
      "One Size": 3500,
    },
  },


   {
    id: 3,
    name: "Crochet Bag",
    image: product1,
    description: "Stylish handmade bag.",
    sizes: {
      "One Size": 3500,
    },
  },

   {
    id: 3,
    name: "Crochet Bag",
    image: product1,
    description: "Stylish handmade bag.",
    sizes: {
      "One Size": 3500,
    },
  },



];

const Products = () => {

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedOptions({
      ...selectedOptions,
      [productId]: size,
    });
  };

  const handleOrder = (product) => {
    const selectedSize = selectedOptions[product.id];

    if (!selectedSize) {
      alert("Please select an option first.");
      return;
    }

    const price = product.sizes[selectedSize];

    const message = `
Hello Shee Creations,

I would like to order:

Product: ${product.name}
Option: ${selectedSize}
Price: Ksh ${price}

Please confirm availability.
    `;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="Products">
      <div className="product-list">
        {productsData.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <select
              value={selectedOptions[product.id] || ""}
              onChange={(e) =>
                handleSizeChange(product.id, e.target.value)
              }
            >
              <option value="">Select Option</option>
              {Object.keys(product.sizes).map((size) => (
                <option key={size} value={size}>
                  {size} - Ksh {product.sizes[size]}
                </option>
              ))}
            </select>

            <button
              className="shop-now"
              onClick={() => handleOrder(product)}
            >
              Order on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;