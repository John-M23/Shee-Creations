import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";

function Header() {
  const navigate = useNavigate();
const goHomeAndScroll = (id) => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 120; // 🔥 adjust if needed
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logo}
          alt="Sheeh Collection Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer"  }}
        />
      </div>

      <nav className="nav">
        <Link
  to="/"
  className="shop-now"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Home
</Link>

        <button onClick={() => goHomeAndScroll("products")} className="shop-now">
          Shop
        </button>

        <button onClick={() => goHomeAndScroll("order")} className="shop-now">
          Custom Orders
        </button>

        <button onClick={() => goHomeAndScroll("About")} className="shop-now">
          About Us
        </button>
        <button onClick={() => goHomeAndScroll("Contact")} className="shop-now">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;