import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok, SiX } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <section id="Contact">
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <SiTiktok />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <SiX />
        </a>

          <a href="https://wwws.youtube.com" target="_blank" rel="noopener noreferrer">
  <FaYoutube />
</a>

        
      </div>
      <div className="footer-text">
        <p>call/whatsup +254704464147</p>
        <p> @2024 Sheeh Creation</p>
        <p>Powered by M23 Creatives</p>
        <div className="quick-links">
          <a href="#Home">Home</a>
          <a href="#Products">Products</a>
          <a href="#Order">Custom Orders</a>
          <a href="#About">About Us</a>
        </div>
      </div>
    </footer>
    </section>
  );
}

export default Footer;