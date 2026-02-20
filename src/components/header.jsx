import logo from '../assets/images/logo.png';
function Header() {
    return (
        <header className="header">
            <div className="logo">
        <img src={logo} alt="Sheeh Collection Logo" />
      </div>
         <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a> 

            
            
            </nav>            



        </header>
    );
}

export default Header;