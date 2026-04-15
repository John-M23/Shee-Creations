import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Order from "./components/order.jsx";
import Products from "./components/products.jsx";
import ProductOrder from "./components/productOrder.jsx";
import About from "./components/About.jsx";
import Testimonial from "./components/Testimonial.jsx";
import CategoryPage from "./components/categoryPage.jsx";
import "./App.css";

function Home() {
  return (
    <>
    <section className="seo-text">
        <p>
          Shee Creations is a leading handmade crochet fashion brand in Kenya,
          offering unique crochet dresses, tops, hats, and accessories. Our
          designs are crafted with love and tailored for modern style and
          comfort.
        </p>
      </section>


      <Hero />
      <Products />
      <Order />
      <About />
      <Testimonial />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductOrder />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;