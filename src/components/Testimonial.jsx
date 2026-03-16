import { useState } from "react";
import product1 from "../assets/Images/Products/Crotchet1.png";
function Testimonial() {
  const testimonials = [
    {
      text: "I absolutely love the custom dress I ordered from Sheeh Collection! The quality is amazing and it fits perfectly. I received so many compliments when I wore it to my event. Highly recommend!",
      name: "Sarah M."
    },
    {
      text: "Sheeh Collection has become my go-to for stylish and unique clothing. The customer service is excellent, and the products are always of high quality. I can't wait to shop with them again!",
      name: "Emily R."
    },
    {
      text: "I had a wonderful experience shopping at Sheeh Collection. The website is easy to navigate, and the checkout process was smooth. My order arrived quickly and exceeded my expectations. I will definitely be a repeat customer!",
      name: "Jessica L."
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-card">
        <img src={product1} alt="Customer" className="testimonial-image" />
        <div className="testimonial-text">
          <p>"{testimonials[current].text}"</p>
          <h3>- {testimonials[current].name}</h3>
        </div>
      </div>

      <div className="testimonial-arrows">
        <button onClick={prevTestimonial}>&lt;</button>
        <button onClick={nextTestimonial}>&gt;</button>
      </div>
    </section>
  );
}

export default Testimonial;