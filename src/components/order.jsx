import { useState } from "react";

function Order() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const details = e.target.details.value;

    const phoneNumber = "254704464147";

    const message = `Hello Shee Creations,%0A%0A
Name: ${name}%0A
Contact: ${contact}%0A
Order Details: ${details}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="order">
      <div>
        <form className="order-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Place Your Custom Order</h2>

          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Contact Information:</label>
          <input type="text" name="contact" required />

          <label>Order Details:</label>
          <textarea
            name="details"
            rows="4"
            required
            placeholder="PLEASE INCLUDE SIZE AND COLOUR"
          ></textarea>

          <button  className="shop-now"type="submit">Submit Order</button>
        </form>
      </div>
    </section>
  );
}

export default Order;