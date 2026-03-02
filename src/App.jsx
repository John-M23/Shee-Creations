import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Order from "./components/Order.jsx";
import Products from "./components/products.jsx";
import ProductOrder from "./components/productOrder.jsx";
import About from "./components/About.jsx";
import Testimonial from "./components/Testimonial.jsx";
import "./App.css";

function Home() {
  return (
    <>
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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;