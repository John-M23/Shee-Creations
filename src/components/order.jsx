function Order() {
    return (
        <div>
          <form className="order-form">
            <h2>Place Your Custom Order</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="contact">Contact Information:</label>
            <input type="text" id="contact" name="contact" required />
            <label htmlFor="details">Order Details:</label>
            <textarea id="details" name="details" rows="4" required placeholder="PLEASE INCLUDE SIZE AND COLOUR"></textarea>
        <label htmlFor="photos">Upload Reference Photos:</label>
            <input type="file" id="photos" name="photos" accept="image/*" multiple />
            <button type="submit">Submit Order</button>
          







             </form>
        </div>
       
    );
};

export default Order;